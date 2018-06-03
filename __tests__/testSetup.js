jest.mock('react-native-device-log', () => {
  class deviceLog {
    constructor() {}
    log = (...args: any[]) => {
      console.log('LOG', args);
    };
    trace = (...args: any[]) => {
      console.log('TRACE', args);
    };
    debug = (...args: any[]) => {
      console.log('DEBUG', args);
    };
    info = (...args: any[]) => {
      console.log('INFO', args);
    };
    error = (...args: any[]) => {
      console.log('ERROR:', args);
    };
    startTimer = () => {};
    stopTimer = () => {};
    logTime = () => {};
  }

  return new deviceLog();
});
