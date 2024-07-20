
import Flight from '@/model/Flight.model';
// import { getIO } from '../lib/socket';
import { useSocket } from '@/context/socket-provider';

const generateFlights = async () => {
  // const {socket} = useSocket()

  const types = ['Commercial', 'Military', 'Private'];
  const status = ['Delayed', 'Cancelled', 'In-flight', 'Scheduled/En Route'];
  const newFlight = new Flight({
    flightNumber: `FL${Math.floor(Math.random() * 10000)}`,
    origin: 'OriginCity',
    destination: 'DestinationCity',
    scheduledDeparture: new Date(),
    status: status[Math.floor(Math.random() * status.length)],
    type: types[Math.floor(Math.random() * types.length)]
  });

  await newFlight.save();

  // const io = socket();
  // io.emit('newFlight', newFlight);
};

setInterval(generateFlights, 60000);
