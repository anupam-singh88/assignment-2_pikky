import type { NextApiRequest, NextApiResponse } from 'next';
// import { authMiddleware } from '../../../middleware/auth';
import dbConnect from '@/lib/dbConnect';
import Flight from '@/model/Flight.model';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const flights = await Flight.find({});
        res.status(200).json(flights);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flights' });
      }
      break;
    case 'POST':
      try {
        const flight = new Flight(req.body);
        await flight.save();
        res.status(201).json(flight);
      } catch (error) {
        res.status(400).json({ error: 'Failed to create flight' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
};

export default (handler);
