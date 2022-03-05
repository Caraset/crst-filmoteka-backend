// <reference types="node" />
import IUser from '../interface/User.interface'

declare global {
  export namespace Express {
    interface Request {
      user: IUser
    }
  }
}

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
