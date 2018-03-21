
export class quote {
  public showDescription: boolean;
  constructor(public id: number, public author: string, public quote: string, public userDate: Date) {
    this.showDescription = false
  }
}
