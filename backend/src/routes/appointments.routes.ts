/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { parseISO } from 'date-fns'

import AppointmentRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

// eslint-disable-next-line import/order
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated)

appointmentsRouter.get('/', async (request, response) => {

  const appointmentsRepository = getCustomRepository(AppointmentRepository)

  const appointments = await appointmentsRepository.find();

  return response.json(appointments)
})

appointmentsRouter.post('/', async (request, response) => {


    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({date: parsedDate, provider_id})

  response.json(appointment)

})

export default appointmentsRouter;
