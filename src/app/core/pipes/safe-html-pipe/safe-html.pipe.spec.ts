import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let safeHtmlPipe: SafeHtmlPipe;
  const sanitizerMock: DomSanitizer = {
    bypassSecurityTrustHtml: () => 0
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  beforeEach(() => {
    safeHtmlPipe = new SafeHtmlPipe(sanitizerMock);
  });

  it('should transform value by calling sanitizer.bypassSecurityTrustHtml', () => {
    const value = 'value-fixture';
    const result = 'result-fixture';
    const spy = spyOn(sanitizerMock, 'bypassSecurityTrustHtml').and.returnValue(result);
    expect(safeHtmlPipe.transform(value)).toBe(result);
    expect(spy).toHaveBeenCalledWith(value);
  });
});
