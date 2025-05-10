import { ConsoleTextColors } from './../enum/console-text-colors.enum';

import { LogLevel } from './../enum/log-level.enum';
import { LoggerService } from './logger.service';

export class ConsoleLoggerService extends LoggerService {
  private constructor() {
    super();
  }

  log(message: string, logLevel: LogLevel): void {
    console.log(this.getLogLine(message, logLevel), {});
  }

  protected getLogLine(message: string, logLevel: LogLevel): string {
    return `${this.getLogLevelColor(logLevel)}${super.getLogLine(message, logLevel)}`;
  }

  private getLogLevelColor(logLevel: LogLevel): string {
    switch (logLevel) {
      case LogLevel.INFO:
        return ConsoleTextColors.BLUE;
      case LogLevel.WARN:
        return ConsoleTextColors.YELLOW;
      case LogLevel.ERROR:
        return ConsoleTextColors.RED;
      case LogLevel.DEBUG:
        return ConsoleTextColors.MAGENTA;
      default:
        throw new Error(`Unknown log level: ${logLevel}`);
    }
  }

  static create(): ConsoleLoggerService {
    return new ConsoleLoggerService();
  }
}
