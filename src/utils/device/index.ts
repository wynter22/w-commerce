class Device {
  userAgent: NavigatorUAData;

  constructor() {
    this.userAgent = (navigator as any).userAgentData;
  }
}

const device = new Device();
export default device;
