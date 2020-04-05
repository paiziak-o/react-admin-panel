import IAuth from './IAuth';
import Firebase from './auth/Firebase';

class Auth implements IAuth {
  private provider: IAuth;
  constructor(provider: string, option?: any) {
    switch(provider) {
      case 'firebase':
        this.provider = new Firebase();
        break;
      default:
        this.provider = new Firebase();
        break;
    }
    
  }

  login = (email: string, password: string): any => this.provider.login(email, password);

  register = (email: string, password: string): any => this.provider.register(email, password);
  getCurrentUser = (): any => this.provider.getCurrentUser();
}

export default Auth;
