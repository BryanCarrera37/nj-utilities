import { LogLevel } from './../enum/log-level.enum';

export interface Logger {
  log(message: string, logLevel: LogLevel): void;
}
