const DEFAULT_THRESHOLD = 500;

class Debounce {

  private threshold: number;
  private timerId: any;

  constructor(threshold = DEFAULT_THRESHOLD) {
    this.threshold = threshold;
    this.timerId = undefined;
  }

  use(callback: () => void) {
    const callbackRunner = () => {
      this.timerId = undefined;
      callback();
    };
    if (this.timerId === undefined) {
      this.timerId = setTimeout(callbackRunner, this.threshold);
    } else {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(callbackRunner, this.threshold);
    }
  }

  clear() {
    clearTimeout(this.timerId);
    this.timerId = undefined;
  }
}

export default Debounce;
