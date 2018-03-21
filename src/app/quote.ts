
export class quote {
  public showquote: boolean;
  constructor(public id: number, public author: string, public quote: string, public userDate: Date) {
    this.showquote = false
  }
}
