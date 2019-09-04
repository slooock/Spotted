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
        if(!this.db){
            this.auth = app.auth();
            this.db = app.firestore();
        }
    }
    
    sendMessage=  (nameCollection, object) => {
        this.db.collection(nameCollection).add(object);
    };

    getMessages= async (nameCollection)=>{
        
       const data = await this.db.collection(nameCollection)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        message: doc.data().message
                    }
                });
                // array of cities objects
                return (data); 
            });
        return (data); 
    }

}

export default Firebase;