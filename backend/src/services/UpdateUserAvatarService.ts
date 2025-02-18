import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import User from '../models/User';

import uploadConfig from '../config/upload';
import AppError from '../errors/AppErros';

/* eslint-disable camelcase */
interface Request {
  user_id: string;
  avatarFilename: string;
}

class updateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExist) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}

export default updateUserAvatarService;
