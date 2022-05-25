import { UserI, MovieI } from '../types'

interface MovieWithDbIdI extends MovieI {
  _id: Types.ObjectId
}

declare global {
  export namespace Express {
    interface Request {
      user: UserI
      movie?: MovieWithDbIdI
    }
  }
}
