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

app.initializeApp(config);
class Firebase {
    constructor() {
        console.log(this.db);
        if(!this.db){
            console.log("Ola");
            
            this.auth = app.auth();
            this.db = app.firestore();
            console.log(this.db);
            
        }
    }
    
    sendMessage=  (nameCollection, object) => {
        this.db.collection(nameCollection).add(object);
    };

}

export default Firebase;