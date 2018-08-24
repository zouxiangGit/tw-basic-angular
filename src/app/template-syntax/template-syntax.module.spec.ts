import { TemplateSyntaxModule } from './template-syntax.module';

describe('TemplateSyntaxModule', () => {
  let templateSyntaxModule: TemplateSyntaxModule;

  beforeEach(() => {
    templateSyntaxModule = new TemplateSyntaxModule();
  });

  it('should create an instance', () => {
    expect(templateSyntaxModule).toBeTruthy();
  });
});
