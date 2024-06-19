export class User {
  private firstName: string;
  readonly lastName: string;
  public age: number;
  public gender: string = "Male";

  constructor(name: string, lastname: string, gender: string, age: number) {
    this.firstName = name;
    this.lastName = lastname;
    this.age = age;
    this.gender = gender;
  }


  getuser (){

  }

  setUser (name:string) {
    console.log(name)

  }
}
