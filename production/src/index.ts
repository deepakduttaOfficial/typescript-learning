class User {
  private readonly city: string = "Cooch Behar";
  protected _courceCound: number = 1;

  constructor(public email: string, public password: string) {}

  private deleteToken() {
    console.log("Delete Token");
  }

  get appleId(): string {
    return `Email: ${this.email}`;
  }

  get courseCount(): number {
    return this._courceCound;
  }

  set courseCount(courseNumber) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courceCound = courseNumber;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courceCound = 4;
  }
}

const user = new User("deepak@gmail.com", "3423");
