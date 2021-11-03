import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PhraseCard } from '../common/phrase-card';

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  phrases: PhraseCard[] = [];

  overallScore: Subject<number> = new Subject<number>();
  totalNumber: Subject<number> = new Subject<number>();

  constructor() { }



  // ADD PHRASE TO STUDY SET
  // Adds a phrase card object to the phrases array if it doesnt already exist
  addPhrase(phraseToAdd: PhraseCard){

    // check if we already have the phrase in study set
    let alreadyAdded: boolean = false;
    let existingPhrase: PhraseCard = undefined!;

    if(this.phrases.length>0){
      for (let currenPhrase of this.phrases){
        if (currenPhrase.id == phraseToAdd.id){
          existingPhrase = currenPhrase;
          break
        }
      }

      // check if we found it
      alreadyAdded = (existingPhrase != undefined);
    }

    if (alreadyAdded){

    }
    else{
      this.phrases.push(phraseToAdd);
    }

    this.computeTotals();
  }


  // HELPER FUNC TO RECALCULATE OVERALL SCORE AND TOTAL PHRASES
  computeTotals() {
    
      let totalScoreValue: number = 0;
      let scoreAverageDenominator: number = 0;

      for (let currentPhrase of this.phrases){
        if (currentPhrase.score != undefined) {
          totalScoreValue += currentPhrase.score;
          scoreAverageDenominator += 1;
        }
      }


      if (scoreAverageDenominator > 0) {
        this.overallScore.next(Math.floor(totalScoreValue/scoreAverageDenominator*10));
      } else {
        this.overallScore.next(0);
      }

      this.totalNumber.next(this.phrases.length);
  }
}
