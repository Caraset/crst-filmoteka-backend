import { Types } from 'mongoose'
import { User } from '../model/User'
import IUser from '../interface/User.interface'

const findUserById = async (id: Types.ObjectId): Promise<IUser | null> =>
  User.findById(id)

const findUserByEmail = async (email: {
  email: string
}): Promise<IUser | null> => User.findOne(email)

const findUserByVerificationToken = async (verificationToken: {
  verificationToken: string
}): Promise<IUser | null> => User.findOne(verificationToken)

const findUserByIdAndUpdate = async (
  id: Types.ObjectId,
  payload: IUser,
  options = {},
): Promise<IUser | null> => User.findByIdAndUpdate(id, payload, { ...options })

const createUser = async (user: IUser): Promise<IUser | null> =>
  User.create(user)

export default {
  findUserById,
  findUserByEmail,
  findUserByIdAndUpdate,
  createUser,
  findUserByVerificationToken,
}
