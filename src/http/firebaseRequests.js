// const {
//     getAuth,
//     signInWithRedirect,
//     GoogleAuthProvider,
//     getRedirectResult
// } = require("firebase/auth");
// const {initializeApp} = require("firebase/app");

// const firebaseConfig = {
//     apiKey: "AIzaSyBqBpCmX6YFxPjx6MVLhAGQf2vHaJBeTlo",
//     authDomain: "smart-brain-4c45c.firebaseapp.com",
//     projectId: "smart-brain-4c45c",
//     storageBucket: "smart-brain-4c45c.appspot.com",
//     messagingSenderId: "824223061026",
//     appId: "1:824223061026:web:727cfe1c0440dcf2dae67b",
//     measurementId: "G-JXHVL0F8VY"
// }

// const firebaseApp = initializeApp(firebaseConfig);

// const auth = getAuth(firebaseApp);
// const googleProvider = new GoogleAuthProvider();


// export const signInGoogleUser = async () => {
//     const {user} = await signInWithRedirect(auth, googleProvider);
//     const userCredentials = await getRedirectResult(auth);
//     console.log(userCredentials);

//     return userCredentials;
// }