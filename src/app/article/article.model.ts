export class Article {
    votes:number;
    title:string;
    link:string;

    constructor(title:string, link:string, votes?:number) {
        this.link= link;
        this.title= title;
        this.votes= votes || 10;
   }

   voteUp():boolean {
    this.votes ++;
    return false;
  }

  voteDown():boolean {
    this.votes --;
    return false;
  }
}