import { TextAnalysisService } from './text-analysis.service';

describe('TextAnalysisService', () => {
  let service: TextAnalysisService;

  beforeEach(() => {
    service = new TextAnalysisService();
  });

  it('повертає пустий масив для пустого рядка', () => {
    expect(service.findMaxFrequencyWords('')).toEqual([]);
  });

  it('ігнорує регістр та пунктуацію', () => {
    expect(service.findMaxFrequencyWords('Hello, HELLO!')).toEqual(['hello']);
  });

  it('повертає всі слова з максимальною частотою', () => {
    expect(service.findMaxFrequencyWords('a a b b c')).toEqual(['a', 'b']);
  });
});
