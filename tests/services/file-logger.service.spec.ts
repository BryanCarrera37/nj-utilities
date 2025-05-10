import { LogLevel } from '@/enum/log-level.enum';
import { LoggerFileConfig } from '@/interfaces/logger-file-config.interface';
import { FileLoggerService } from '@/services/file-logger.service';

import { mkdirSync, existsSync, appendFile } from 'fs';

jest.mock('fs', () => ({
  mkdirSync: jest.fn(),
  existsSync: jest.fn(),
  appendFile: jest.fn(),
}));

describe('FileLoggerService', () => {
  let service: FileLoggerService;
  let config: LoggerFileConfig;

  beforeEach(() => {
    config = {
      directory: 'dir',
      filePrefix: 'some-prefix',
    };
    service = FileLoggerService.create(config);
  });

  describe('getLogLine', () => {
    it('should return a formatted log line with the current date and time', () => {
      const timestampRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/;
      const message = 'test message';
      const logLine: string = service['getLogLine'](message, LogLevel.INFO);
      const logLineParts = logLine.split(' - ');

      expect(logLineParts[0]).toContain(`[${LogLevel.INFO}]`);
      expect(logLineParts[1]).toMatch(timestampRegex);
      expect(logLineParts[2]).toBe(message);
      expect(logLineParts.length).toBe(3);
    });
  });

  describe('log', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should append the message to the log file', () => {
      const message = 'Test message';
      const logLevel = LogLevel.INFO;

      service.log(message, logLevel);

      expect(appendFile).toHaveBeenCalledWith(
        expect.stringContaining('dir/some-prefix-'),
        expect.stringContaining(`[${logLevel}]`),
        expect.any(Function),
      );
    });
  });

  describe('createDirectoryIfNecessary', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should create the logging directory if it does not exist', () => {
      (mkdirSync as jest.Mock).mockImplementation(() => {});
      (existsSync as jest.Mock).mockReturnValue(false);

      service['createDirectoryIfNecessary']();

      expect(mkdirSync).toHaveBeenCalledWith(config.directory, { recursive: true });
      expect(existsSync).toHaveBeenCalledWith(config.directory);
    });

    it('should not create the logging directory if it already exists', () => {
      (mkdirSync as jest.Mock).mockImplementation();
      (existsSync as jest.Mock).mockReturnValue(true);

      service['createDirectoryIfNecessary']();

      expect(mkdirSync).not.toHaveBeenCalled();
      expect(existsSync).toHaveBeenCalledWith(config.directory);
    });
  });

  describe('getFilename', () => {
    it('should return the correct filename based on the logging directory and prefix', () => {
      const expectedFilenameRegex = /dir\/some-prefix-\d{4}-\d{2}-\d{2}\.log/;
      const filename = service['getFilename']();
      expect(filename).toMatch(expectedFilenameRegex);
    });
  });
});
