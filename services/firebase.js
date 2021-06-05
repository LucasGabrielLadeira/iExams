import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUdH2RPsoBjU58ihSKAPGUlc3FKE-RIkA",
    authDomain: "iexams-9b56a.firebaseapp.com",
    projectId: "iexams-9b56a",
    storageBucket: "iexams-9b56a.appspot.com",
    messagingSenderId: "521402951465",
    appId: "1:521402951465:web:7a315d91e0c4af0a6fb938"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}