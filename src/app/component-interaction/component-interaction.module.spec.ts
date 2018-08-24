import { ComponentInteractionModule } from './component-interaction.module';

describe('ComponentInteractionModule', () => {
  let componentInteractionModule: ComponentInteractionModule;

  beforeEach(() => {
    componentInteractionModule = new ComponentInteractionModule();
  });

  it('should create an instance', () => {
    expect(componentInteractionModule).toBeTruthy();
  });
});
