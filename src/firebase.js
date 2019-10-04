import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAswYwfv7iCfvQSoTIf32mUm5Y9Odn7hGE',
  authDomain: 'budy-chat-test.firebaseapp.com',
  databaseURL: 'https://budy-chat-test.firebaseio.com',
  projectId: 'budy-chat-test',
  storageBucket: 'budy-chat-test.appspot.com',
  messagingSenderId: '173892740952'
});

const db = firebase.firestore(firebaseApp);

export default { db };
