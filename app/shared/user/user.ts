export class User {
  email: string;
  password: string;

  constructor(email:string = 'tomperso@yahoo.fr') {
    this.email = email;
  }
}