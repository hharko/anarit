// Änärit: ilmoitukset, kun sovellus on kiinni. Tämä tiedosto kuuluu samaan kansioon kuin index.html.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({"apiKey": "AIzaSyAQg8ltWfhnhxHRpgLfWd9KVCLn62Xr7H4", "authDomain": "anarit.firebaseapp.com", "projectId": "anarit", "storageBucket": "anarit.firebasestorage.app", "messagingSenderId": "965565392590", "appId": "1:965565392590:web:b5cb739d377b1b9f67529f"});
firebase.messaging();   // shows the notification itself; tapping it opens the page at the match (its link)
