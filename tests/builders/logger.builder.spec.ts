import { LoggerBuilder } from '@/builders/logger.builder';
import { LoggerFileConfig } from '@/interfaces/logger-file-config.interface';
import { ConsoleLoggerService } from '@/services/console-logger.service';
import { FileLoggerService } from '@/services/file-logger.service';

import { mkdirSync, existsSync } from 'fs';

jest.mock('fs', () => ({
  existsSync: jest.fn(() => false),
  mkdirSync: jest.fn(),
}));

describe('LoggerBuilder', () => {
  let builder: LoggerBuilder;

  beforeEach(() => {
    builder = new LoggerBuilder();
  });

  describe('useConsole', () => {
    afterAll(() => {
      (builder as any).isConsoleLogger = false;
      (builder as any).isFileLogger = false;
      (builder as any).fileLoggerConfig = undefined;
    });

    it('should set the console to be used', () => {
      builder.useConsole();
      expect((builder as any).isConsoleLogger).toBe(true);
    });

    it('should throw an error if both console and file loggers are used', () => {
      builder.useFile({} as any);
      expect(() => builder.useConsole()).toThrow('Cannot use both console and file loggers at the same time.');
    });
  });

  describe('useFile', () => {
    afterAll(() => {
      (builder as any).isConsoleLogger = false;
      (builder as any).isFileLogger = false;
      (builder as any).fileLoggerConfig = undefined;
    });

    it('should set the file and its config to be used', () => {
      const config = {} as any;
      builder.useFile(config);
      expect((builder as any).isFileLogger).toBe(true);
      expect((builder as any).fileLoggerConfig).toEqual(config);
    });

    it('should throw an error if both console and file loggers are used', () => {
      builder.useConsole();
      expect(() => builder.useFile({} as any)).toThrow('Cannot use both console and file loggers at the same time.');
    });
  });

  describe('build', () => {
    afterAll(() => {
      (builder as any).isConsoleLogger = false;
      (builder as any).isFileLogger = false;
      (builder as any).fileLoggerConfig = undefined;
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should return an instance to handle Console Logging', () => {
      builder.useConsole();
      const logger = builder.build();
      expect(logger).toBeInstanceOf(ConsoleLoggerService);
    });

    it('should return an instance to handle File Logging', () => {
      (existsSync as jest.Mock).mockReturnValue(false);
      (mkdirSync as jest.Mock).mockImplementation();

      const config: LoggerFileConfig = {
        directory: 'logs',
        filePrefix: 'some-prefix',
      };

      builder.useFile(config);
      const logger = builder.build();
      expect(logger).toBeInstanceOf(FileLoggerService);
      expect(existsSync).toHaveBeenCalledTimes(1);
      expect(mkdirSync).toHaveBeenCalledWith(config.directory, { recursive: true });
    });

    it('should throw an error if neither console nor file logger is configured', () => {
      expect(() => builder.build()).toThrow('No logger is configured. Please use either console or file logger');
    });
  });
});
