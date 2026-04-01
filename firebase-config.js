// ============================================================
//  firebase-config.js  —  Firebase setup for E-Governance Portal
//  Project: egovernance-portal
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyAgHV0d_jHY9M499q69AzqeYXJX2CF8rMM",
  authDomain: "egovernance-portal.firebaseapp.com",
  projectId: "egovernance-portal",
  storageBucket: "egovernance-portal.firebasestorage.app",
  messagingSenderId: "967696893320",
  appId: "1:967696893320:web:cdb9b4436f9f4df091e63d",
  measurementId: "G-KGZKNMGDQ8"
};

// Initialize Firebase using the compat CDN (no module bundler needed)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
