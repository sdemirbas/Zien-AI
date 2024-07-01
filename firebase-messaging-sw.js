importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAbIQp5kFKi_FKEVnHwk8XF_rfZnOpTFdE",
  authDomain: "zienai.firebaseapp.com",
  projectId: "zienai",
  storageBucket: "zienai.appspot.com",
  messagingSenderId: "627801203003",
  appId: "1:627801203003:web:1c13a094239e3d4072571e",
  measurementId: "G-WNBQD6HQD2"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});