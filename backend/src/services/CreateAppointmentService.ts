/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
import { getCustomRepository } from 'typeorm';
import Appointment from "../models/Appointment";
import AppointmentRepository from "../repositories/AppointmentsRepository";
// eslint-disable-next-line import/order
import { startOfHour } from 'date-fns'
import AppError from '../errors/AppErros';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {

  public async execute({ provider_id, date }: Request): Promise<Appointment>{

    const appointmentRepository = getCustomRepository(AppointmentRepository)

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(
      appointmentDate,
    )

      if(findAppointmentInSameDate){
        throw new AppError('This appointment is already booked')
      }

    const appointment = appointmentRepository.create({
      provider_id,
      date:appointmentDate,
    })

    await appointmentRepository.save(appointment)

    return appointment;

  }
}

export default CreateAppointmentService;
