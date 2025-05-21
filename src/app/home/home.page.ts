import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TextAnalysisService } from '../services/text-analysis.service';
import { TextInputComponent } from '../components/text-input/text-input.component';
import { ResultComponent } from '../components/result/result.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    TextInputComponent,
    ResultComponent,
  ],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  textForm: FormGroup = this.fb.group({ text: [''] });
  resultWords: string[] = [];

  constructor(
    private fb: FormBuilder,
    private textAnalysis: TextAnalysisService
  ) {}

  analyze() {
    const text = this.textForm.value.text;
    this.resultWords = this.textAnalysis.findMaxFrequencyWords(text);
  }
  get textControl() {
    return this.textForm.get('text') as FormControl;
  }
}
