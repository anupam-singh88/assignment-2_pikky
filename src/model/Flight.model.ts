import { Schema, model, models } from 'mongoose';

const flightSchema = new Schema({
  flightNumber: { type: String, required: true, unique: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  scheduledDeparture: { type: Date, required: true },
  status: {
    type: String,
    enum: ['Delayed', 'Cancelled', 'In-flight', 'Scheduled/En Route'],
    default: 'Scheduled/En Route'
  },
  type: { type: String, enum: ['Commercial', 'Military', 'Private'], required: true }
}, { timestamps: true });

const Flight = models.Flight || model('Flight', flightSchema);

export default Flight;
