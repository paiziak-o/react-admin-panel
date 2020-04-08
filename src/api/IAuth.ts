interface IAuth {
  login(email: string, password: string): any;
  register(email: string, password: string): any;
  logout(): void;
  getCurrentUser(): any;
}

export default IAuth;