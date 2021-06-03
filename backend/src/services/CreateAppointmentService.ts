/* eslint-disable prettier/prettier */
import Appointment from "../models/Appointment";
import AppointmentRepository from "../repositories/AppointmentsRepository";
// eslint-disable-next-line import/order
import { startOfHour } from 'date-fns'

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {

  private appointmentRepository: AppointmentRepository

  constructor(appointmentRepository: AppointmentRepository){
    this.appointmentRepository = appointmentRepository;
  }

  public execute({ provider, date }: Request): Appointment{
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentRepository.findByDate(
      appointmentDate,
    )

      if(findAppointmentInSameDate){
        throw Error('This appointment is already booked')
      }

    const appointment = this.appointmentRepository.create({
      provider,
      date:appointmentDate,
    })

    return appointment;

  }
}

export default CreateAppointmentService;
