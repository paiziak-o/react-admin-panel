import * as firebase from 'firebase';

import IAuth from '../IAuth';

class Firebase implements IAuth {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBlX_yDRddoom6qpWoVIpnihAo2KeQyelg',
      authDomain: 'react-admin-panel-61827.firebaseapp.com',
      databaseURL: 'https://react-admin-panel-61827.firebaseio.com',
      projectId: 'react-admin-panel-61827',
      storageBucket: 'react-admin-panel-61827.appspot.com',
      messagingSenderId: '348947102767',
      appId: '1:348947102767:web:2b8809ce30baf56cba5ada',
      measurementId: 'G-XV6ENSB4W8',
    });
  }

  login = async (email: string, password: string): Promise<any> => {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log({errorCode, errorMessage})
      // ...
    });
  }

  register = async (email: string, password: string): Promise<any> => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  getCurrentUser = async (): Promise<any> => {
    return firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        return user;
      }

      throw Error('NO_LOGGED_IN'); 
    });
  }
}

export default Firebase;