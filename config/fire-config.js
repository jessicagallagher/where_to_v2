import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB-xEPETXSfjboKe5H0kPUu-ZdRDGfszmA',
  authDomain: "where-to-jess.firebaseapp.com",
  databaseURL: 'https://where-to-jess-default-rtdb.firebaseio.com/',
  projectId: "where-to-jess",
  storageBucket: "where-to-jess.appspot.com",
  messagingSenderId: "914509599583",
  appId: "1:914509599583:web:80cdf3e4090417b0f35cea"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;