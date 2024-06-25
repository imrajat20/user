// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyD-Q00fZ_pSu3cliLOxp8NgejhkIIsbeQ4",
//     authDomain: "travel-app-b7820.firebaseapp.com",
//     projectId: "travel-app-b7820",
//     storageBucket: "travel-app-b7820.appspot.com",
//     messagingSenderId: "658572936387",
//     appId: "1:658572936387:web:8d5e543313ff35d17b8e76"
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-Q00fZ_pSu3cliLOxp8NgejhkIIsbeQ4",
    authDomain: "travel-app-b7820.firebaseapp.com",
     projectId: "travel-app-b7820",
     storageBucket: "travel-app-b7820.appspot.com",
     messagingSenderId: "658572936387",
     appId: "1:658572936387:web:8d5e543313ff35d17b8e76"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

