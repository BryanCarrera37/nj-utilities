export enum ServerMessage {
  BAD_REQUEST = 'Invalid payload',
  UNAUTHORIZED = 'You must sign in!',
  FORBIDDEN = 'This action is not allowed',
  NOT_FOUND = 'Resource not found',
  INTERNAL_SERVER_ERROR = 'An error has occurred. Try again later',
}
