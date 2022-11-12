import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCCA8S0-xpWh3A8mada37_C3PrXGnR-ScA",
    authDomain: "tobi-clothing-db.firebaseapp.com",
    projectId: "tobi-clothing-db",
    storageBucket: "tobi-clothing-db.appspot.com",
    messagingSenderId: "489732505823",
    appId: "1:489732505823:web:d928eeeed7cc02564fe96a"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider) 