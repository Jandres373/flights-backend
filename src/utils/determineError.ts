import { StatusCode } from '../constants/statusCodes';
import errors from '../errors/error.response'

const { AuthenticationError, PermissionError, RateLimitError, ResourceNotFoundError, ValidationError } = errors

export function determineStatusCode(error: any): number {
  if (error instanceof ValidationError) {
    return StatusCode.BAD_REQUEST;
  } else if (error instanceof AuthenticationError) {
    return StatusCode.UNAUTHORIZED;
  } else if (error instanceof PermissionError) {
    return StatusCode.FORBIDDEN;
  } else if (error instanceof ResourceNotFoundError) {
    return StatusCode.NOT_FOUND;
  } else if (error instanceof RateLimitError) {
    return StatusCode.TOO_MANY_REQUESTS;
  } else {
    console.error(error); // Log the error for debugging purposes
    return StatusCode.INTERNAL_SERVER_ERROR;
  }
}

