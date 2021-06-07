/* eslint-disable new-cap */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { parseISO } from 'date-fns'

import multer from 'multer'
import AppointmentRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

// eslint-disable-next-line import/order
import { getCustomRepository } from 'typeorm';
import CreateUserService from '../services/CreateUsers';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import uploadConfig from '../config/upload'
import updateUserAvatarService from '../services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig)


 usersRouter.post('/', async (request, response) => {


    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password
    })

    delete user.password;

    return response.json(user)

})

usersRouter.patch('/avatar', ensureAuthenticated,upload.single('avatar') ,async (request, response) => {


    const updateUserAvatar = new updateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename
    })

    delete user.password;

    return response.json(user)


})

export default usersRouter;
