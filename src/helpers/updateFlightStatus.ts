import { useSocket } from "@/context/socket-provider";
import Flight from "@/model/Flight.model";


const updateFlightStatus = async () => {
  // const {socket}=useSocket()
  const flights = await Flight.find({});
  const status = ['Delayed', 'Cancelled', 'In-flight', 'Scheduled/En Route'];

  for (const flight of flights) {
    flight.status = status[Math.floor(Math.random() * status.length)];
    await flight.save();

    // const io = socket();
    // io.emit('updateFlight', flight);
  }
};

setInterval(updateFlightStatus, 60000);
