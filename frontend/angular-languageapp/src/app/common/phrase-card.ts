import { Phrase } from "./phrase";

export class PhraseCard {

    id!: number;
    frPhrase!: string;
    enPhrase!: string;

    score!: number;

    constructor(phrase: Phrase){
        this.id = phrase.id;
        this.frPhrase = phrase.frPhrase;
        this.enPhrase = phrase.enPhrase;

        this.score = 0;
    }

}
