import { LogLevel } from './../enum/log-level.enum';
import { getCurrentDateFormatted } from './../helpers/date-helper';
import { Logger } from './../interfaces/logger.interface';

export abstract class LoggerService implements Logger {
  abstract log(message: string, logLevel: LogLevel): void;

  protected getLogLine(message: string, logLevel: LogLevel): string {
    return `[${logLevel}] - ${getCurrentDateFormatted('YYYY-MM-DD HH:mm:ss')} - ${message}`;
  }
}
