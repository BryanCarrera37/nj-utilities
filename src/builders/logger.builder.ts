import { LoggerFileConfig } from './../interfaces/logger-file-config.interface';
import { Logger } from './../interfaces/logger.interface';
import { ConsoleLoggerService } from './../services/console-logger.service';
import { FileLoggerService } from './../services/file-logger.service';

export class LoggerBuilder {
  private isConsoleLogger?: boolean;
  private isFileLogger?: boolean;
  private fileLoggerConfig?: LoggerFileConfig;

  useConsole(): LoggerBuilder {
    this.isConsoleLogger = true;
    this.throwErrorInCaseBothLoggersAreUsed();
    return this;
  }

  useFile(config: LoggerFileConfig): LoggerBuilder {
    this.isFileLogger = true;
    this.fileLoggerConfig = config;
    this.throwErrorInCaseBothLoggersAreUsed();
    return this;
  }

  build(): Logger {
    this.throwErrorInCaseNoLoggerIsUsed();
    if (this.isConsoleLogger) {
      return ConsoleLoggerService.create();
    }

    return FileLoggerService.create(this.fileLoggerConfig!);
  }

  private throwErrorInCaseBothLoggersAreUsed(): void {
    if (this.isConsoleLogger && this.isFileLogger) {
      throw new Error('Cannot use both console and file loggers at the same time.');
    }
  }

  private throwErrorInCaseNoLoggerIsUsed(): void {
    if (!this.isConsoleLogger && !this.isFileLogger) {
      throw new Error('No logger is configured. Please use either console or file logger');
    }
  }
}
