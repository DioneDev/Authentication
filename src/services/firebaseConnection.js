import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCyciVP3k02Yw8pETbnSfxsy_BM_r2EIFM",
    authDomain: "app-desafio-954b6.firebaseapp.com",
    projectId: "app-desafio-954b6",
    storageBucket: "app-desafio-954b6.appspot.com",
    messagingSenderId: "608539380664",
    appId: "1:608539380664:web:47d9ebe0f22b7864cb9d4d",
    measurementId: "G-9ZK1LH60FL"
};

// Initialize Firebase 

if(!firebase.apps.length){
// Abre minha conexão 
firebase.initializeApp(firebaseConfig);
}
export default firebase;