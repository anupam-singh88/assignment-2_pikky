import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Flight from '@/model/Flight.model';
// import { authMiddleware } from '../../../middleware/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const flight = await Flight.findById(id);
        if (!flight) {
          return res.status(404).json({ error: 'Flight not found' });
        }
        res.status(200).json(flight);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flight' });
      }
      break;
    case 'PUT':
      try {
        const flight = await Flight.findByIdAndUpdate(id, req.body, { new: true });
        if (!flight) {
          return res.status(404).json({ error: 'Flight not found' });
        }
        res.status(200).json(flight);
      } catch (error) {
        res.status(400).json({ error: 'Failed to update flight' });
      }
      break;
    case 'DELETE':
      try {
        const flight = await Flight.findByIdAndDelete(id);
        if (!flight) {
          return res.status(404).json({ error: 'Flight not found' });
        }
        res.status(200).json({ message: 'Flight deleted' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete flight' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
};

export default (handler);
