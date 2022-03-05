export default interface IUser {
  _id?: string
  password?: string
  email?: string
  subscription?: 'starter' | 'pro' | 'business'
  token?: string | null
  verify?: boolean
  verificationToken?: string | null
}
