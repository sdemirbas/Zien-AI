import { getFirestore, collection, getDocs, addDoc, query, where } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9YvUI6EDGTcULTRAxiRmE3id1h6aezAQ",
  authDomain: "zientech-161c4.firebaseapp.com",
  projectId: "zientech-161c4",
  storageBucket: "zientech-161c4.appspot.com",
  messagingSenderId: "99032226847",
  appId: "1:99032226847:web:8cad75113b4d77aff3c92a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userId = localStorage.getItem("userId");

if (userId) {
  console.log("Giriş yapan kullanıcının UID'si:", userId);

  // try {
  //   const q = query(collection(db, "companies"), where("companyCode", "==", "1005"));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data().companyCode}`);
  //   });
  // } catch (e) {
  //   console.error("Veri Alınamadı ", e);
  // }
} else {
  window.location.href = "pages/samples/login.html";
}

function logout() {
  // localStorage'daki userID'yi temizle
  localStorage.removeItem('userId');

  // Login sayfasına yönlendir
  window.location.href = "pages/login/login.html";
}

// const apiUrl = `https://us-central1-zienai.cloudfunctions.net/app/user`;
// let loginUSer;
// fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         loginUSer = data.filter(x => x.id === "7609YqCoSogmPxxrEh9v");
//         localStorage.setItem('currentUser', JSON.stringify(loginUSer));
//     })
//     .catch((error) => {
//         console.error("Veri alınamadı:", error);
//     });

// document.addEventListener('DOMContentLoaded', function () {
//     // Yerel depodan kullanıcı bilgilerini al
//     const currentUserJSON = localStorage.getItem('currentUser');
//     if (currentUserJSON) {
//         const currentUser = JSON.parse(currentUserJSON);

//         // Kullanıcı bilgilerini HTML'e yerleştir
//         document.getElementById('name').textContent = currentUser[0].name;
//         document.getElementById('userName').textContent = currentUser[0].userName;
//         document.getElementById('authName').textContent = currentUser[0].authName;
//     }
// });