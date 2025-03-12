
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth, signOut , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// // 🔥 Firebase Config (Replace with your Firebase keys)
// const firebaseConfig = {
//     apiKey: "AIzaSyCYRmfnq_JnrcdxhP4xrWMu5mMdb6fQjAo",
//     authDomain: "islam-app-6bb2e.firebaseapp.com",
//     projectId: "islam-app-6bb2e",
//     storageBucket: "islam-app-6bb2e.firebasestorage.app",
//     messagingSenderId: "74748834935",
//     appId: "1:74748834935:web:0bd586c92ad0fa6c540272",
//     measurementId: "G-L7ZDP3NWBE"
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);



// // 🚨 Page Access Control
// onAuthStateChanged(auth, (user) => {
//     if (!user) {
//         window.location.href = "index.html";
//     } else {
//         loadTracker(user.uid);
//     }
// });

// // 🛑 Logout Button Functionality
// document.getElementById("logout-btn").addEventListener("click", () => {
//     Swal.fire({
//         title: "کیا آپ واقعی لاگ آؤٹ کرنا چاہتے ہیں؟",
//         text: "آپ کا سیشن ختم ہو جائے گا!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#d33",
//         cancelButtonColor: "#3085d6",
//         confirmButtonText: "جی ہاں، لاگ آؤٹ کریں",
//         cancelButtonText: "منسوخ کریں"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             signOut(auth).then(() => {
//                 Swal.fire("لاگ آؤٹ کامیاب", "آپ کو لاگ آؤٹ کر دیا گیا ہے!", "success")
//                 .then(() => {
//                     window.location.href = "index.html"; // 👈 Redirect to login page
//                 });
//             }).catch((error) => {
//                 Swal.fire("Error!", error.message, "error");
//             });
//         }
//     });
// });
