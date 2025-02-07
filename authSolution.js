// authSolution.js

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

const initializeAuth = () => new Promise((resolve, reject) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      resolve({ user, success: true });
    } else {
      resolve({ user: null, success: true });
    }
  }, error => reject(error));
});

initializeAuth()
  .then(result => {
    if (result.success){
        console.log('Authentication state:', result.user ? 'logged in' : 'logged out');
    }
    else{
        console.log('Authentication Error',result);
    }
  })
  .catch(error => console.error('Authentication Error:', error));