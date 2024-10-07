// utils/CustomError.ts
export class CustomError extends Error {
    public statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      Object.setPrototypeOf(this, CustomError.prototype);
    }
  }
  
  export class ValidationError extends CustomError {
    constructor(message: string) {
      super(message, 400);
    }
  }
  
  export class AuthenticationError extends CustomError {
    constructor(message: string) {
      super(message, 401);
    }
  }
  
  export class NotFoundError extends CustomError {
    constructor(message: string) {
      super(message, 404);
    }
  }
  