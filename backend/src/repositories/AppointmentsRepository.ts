/* eslint-disable lines-between-class-members */
/* eslint-disable prettier/prettier */

import { EntityRepository, Repository } from 'typeorm'
import Appointment from '../models/Appointment';

// eslint-disable-next-line spaced-comment

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment>{

  public async findByDate(date: Date): Promise< Appointment | null> {

      const findAppointment = await this.findOne({
        where: { date },
      })

      return findAppointment || null;
  }
}

export default AppointmentRepository;
