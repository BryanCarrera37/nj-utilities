export interface LoggerFileConfig {
  /**
   * The directory where the log files will be stored.
   * @example '<rootDir>/logs'
   */
  directory: string;

  /**
   * The prefix to be used for the log files.
   * @example 'app-log'
   * @description The prefix will be used to create the log file name.
   * The log file name will be in the format: {filePrefix}-{currentDate}.log
   * @example 'app-log-2023-10-01.log'
   */
  filePrefix?: string;
}
