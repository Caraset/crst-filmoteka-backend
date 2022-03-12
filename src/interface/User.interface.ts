export default interface IUser {
  _id?: string
  password?: string
  email?: string
  // subscription?: 'starter' | 'pro' | 'business'
  // movies: number[] | string[]
  movies: (string | number)[]
  token?: string | null
  verify?: boolean
  verificationToken?: string | null
}
