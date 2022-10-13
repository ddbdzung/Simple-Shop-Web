import { permissionArray, permissions } from './permissions.mjs'
import { role } from '../constants/index.mjs'
import { userService } from '../services/index.mjs'

const { READ_USER, UPDATE_USER } = permissions.USER

export const adminRole = {
  name: role.ADMIN,
  permission: [...permissionArray],
}

export const userRole = {
  name: role.USER,
  permission: [READ_USER, UPDATE_USER],
}

export const adminAccount = {
  username: 'admin shop web',
  email: 'isora2002@gmail.com',
  password: userService.hashPassword('root123!@#'),
  role: role.ADMIN,
}
