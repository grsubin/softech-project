import { CheckOutModule } from './check-out.module';

describe('CheckOutModule', () => {
  let checkOutModule: CheckOutModule;

  beforeEach(() => {
    checkOutModule = new CheckOutModule();
  });

  it('should create an instance', () => {
    expect(checkOutModule).toBeTruthy();
  });
});
