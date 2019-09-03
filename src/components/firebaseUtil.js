import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyCQtltvLF87Qs65A88opZSgrb4IwHTxJwE",
    authDomain: "spotted-7b194.firebaseapp.com",
    databaseURL: "https://spotted-7b194.firebaseio.com",
    projectId: "spotted-7b194",
    storageBucket: "spotted-7b194.appspot.com",
    messagingSenderId: "398007721054",
    appId: "1:398007721054:web:587c7dd9bb7725d0"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut().then(() => {
        console.log('Sign out successfully');
    }).catch(function (error) {
        console.log('Sign out unsuccessfull');
        // An error happened.
    });

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    doInsertItem = (nameCollection, object) =>
        this.db.collection(nameCollection).add(object).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });

    doSearchIdInsert = async (collection, identificador) => {
        const arroz = await this.db.collection(collection).doc(identificador).get();

        return (arroz.data());
    };
}
export default Firebase;