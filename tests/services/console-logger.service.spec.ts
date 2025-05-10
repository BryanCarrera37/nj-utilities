import { LogLevel } from '@/enum/log-level.enum';
import { ConsoleLoggerService } from '@/services/console-logger.service';

describe('ConsoleLoggerService', () => {
  let service: ConsoleLoggerService;

  beforeEach(() => {
    service = ConsoleLoggerService.create();
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
    it('should log messages with the correct format', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      const message = 'Test message';
      const logLevel = LogLevel.INFO;

      service.log(message, logLevel);

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(`[${logLevel}]`), {});
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message), {});

      logSpy.mockRestore();
    });
  });
});
