/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { parseISO } from 'date-fns'

import AppointmentRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

// eslint-disable-next-line import/order
import { getCustomRepository } from 'typeorm';
import CreateUserService from '../services/CreateUsers';

const usersRouter = Router();


 usersRouter.post('/', async (request, response) => {

  try {

    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password
    })

    delete user.password;

    return response.json(user)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default usersRouter;
