// <reference types="node" />
import IUser from '../interface/User.interface'
import MovieI from '../interface/Movie.interface'

interface MovieWithDbIdI extends MovieI {
  _id: Types.ObjectId
}

declare global {
  export namespace Express {
    interface Request {
      user: IUser
      movie?: MovieWithDbIdI
    }
  }
}

// declare global {
//   export namespace Express {

//     interface RequestHandler {

//     }
//   }
// }

// declare global {
//   export namespace jsonwebtoken {
//     interface JsonWebTokenError {
//       status: number
//     }
//   }
// }

// export class JsonWebTokenError extends JsonWebTokenError {
//   constructor(status: number)
// }

// | JsonWebTokenError
// | NotBeforeError
// | TokenExpiredError;
