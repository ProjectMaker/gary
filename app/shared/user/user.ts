export class User {
  email: string;
  password: string;

  constructor(email:string = 'tomperso@yahoo.fr', password:string = 'Rudeboy788?788') {
    this.email = email;
    this.password = password;
  }
}