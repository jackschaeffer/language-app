import { Component, OnInit } from '@angular/core';
import { PhrasesService } from 'src/app/services/phrases.service';

@Component({
  selector: 'app-phrase-status',
  templateUrl: './phrase-status.component.html',
  styleUrls: ['./phrase-status.component.css']
})
export class PhraseStatusComponent implements OnInit {

  overallScore: number = 0;
  totalNumber: number = 0;

  constructor(private phrasesService: PhrasesService) { }

  ngOnInit(): void {
    this.updatePhrasesStatus();
  }


  updatePhrasesStatus() {
    
    // Subscribe to the phraseService properties
    this.phrasesService.overallScore.subscribe(
      data => this.overallScore = data
    );

    this.phrasesService.totalNumber.subscribe(
      data => this.totalNumber = data
    );
  }

}
