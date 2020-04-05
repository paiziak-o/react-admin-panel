interface IAuth {
  login(email: string, password: string): any;
  register(email: string, password: string): any;
  getCurrentUser(): any;
}

export default IAuth;