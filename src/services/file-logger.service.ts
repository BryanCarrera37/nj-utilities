import { appendFile, existsSync, mkdirSync } from 'fs';
import { LogLevel } from './../enum/log-level.enum';
import { LoggerService } from './logger.service';
import { LoggerFileConfig } from './../interfaces/logger-file-config.interface';
import { getCurrentDateFormatted } from './../helpers/date-helper';

export class FileLoggerService extends LoggerService {
  private loggingDirectory: string;
  private filePrefix?: string;

  private constructor(config: LoggerFileConfig) {
    super();
    this.loggingDirectory = config.directory;
    this.filePrefix = config.filePrefix;
    this.createDirectoryIfNecessary();
  }

  log(message: string, logLevel: LogLevel): void {
    appendFile(this.getFilename(), this.getLogLine(message, logLevel), (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
        throw err;
      }
    });
  }

  protected getLogLine(message: string, logLevel: LogLevel): string {
    return `${super.getLogLine(message, logLevel)}\n`;
  }

  private createDirectoryIfNecessary(): void {
    if (existsSync(this.loggingDirectory)) {
      return;
    }

    mkdirSync(this.loggingDirectory, { recursive: true });
  }

  private getFilename(): string {
    if (!this.filePrefix?.trim()) {
      return `${this.loggingDirectory}/${getCurrentDateFormatted('YYYY-MM-DD')}.log`;
    }

    return `${this.loggingDirectory}/${this.filePrefix?.trim() ? this.filePrefix + '-' : ''}${getCurrentDateFormatted('YYYY-MM-DD')}.log`;
  }

  static create(config: LoggerFileConfig): FileLoggerService {
    return new FileLoggerService(config);
  }
}
