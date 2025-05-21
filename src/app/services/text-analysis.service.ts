import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TextAnalysisService {
  findMaxFrequencyWords(text: string): string[] {
    if (!text) return [];

    const cleaned = text.toLowerCase().replace(/[^a-zа-яіїєґ0-9\s]/gi, '');
    const words = cleaned.split(/\s+/).filter((w) => w.length > 0);

    const freq = new Map<string, number>();
    words.forEach((word) => {
      freq.set(word, (freq.get(word) || 0) + 1);
    });

    const maxFreq = Math.max(...freq.values(), 0);
    if (maxFreq === 0) return [];

    return Array.from(freq.entries())
      .filter(([_, count]) => count === maxFreq)
      .map(([word]) => word);
  }
}
