import { LifecycleModule } from './lifecycle.module';

describe('LifecycleModule', () => {
  let lifecycleModule: LifecycleModule;

  beforeEach(() => {
    lifecycleModule = new LifecycleModule();
  });

  it('should create an instance', () => {
    expect(lifecycleModule).toBeTruthy();
  });
});
