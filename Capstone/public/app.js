// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGLiieuc_un7gASflZoO5IFxxa_XHM1i0",
    authDomain: "schedule-me-44d37.firebaseapp.com",
    databaseURL: "https://schedule-me-44d37.firebaseio.com",
    projectId: "schedule-me-44d37",
    storageBucket: "schedule-me-44d37.appspot.com",
    messagingSenderId: "506796346267",
    appId: "1:506796346267:web:8b6e69a4db77d3aca62f3e",
    measurementId: "G-S1HC3BQ9FV"
  };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
        const auth = firebase.auth();
        
        
        function signUp(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("Signed Up");

            window.location.href="index.html"
        }
        
        
        
        function signIn(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            window.location.href="landingpage.html"
        }
        
        
        function signOut(){
            
            auth.signOut();
            alert("Signed Out");
            
            window.location.href="index.html"
        }
        
        
        
        auth.onAuthStateChanged(function(user){
            
            if(user){
                
                var email = user.email;
                alert("Active User " + email);
                
                //Take user to a different or home page
    
                //is signed in
                
            }else{
                
                alert("No Active User");
                //no user is signed in
            }
            
            
            
        });
    


document.addEventListener("DOMContentLoaded", event => {
const app = firebase.app();
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => { 
            const user= result.user;
            document.write(`Welcome ${user.displayName} to Schedule Me`);
            console.log(user)

            //hopefully redirects to landing page
            window.location.href="landingpage.html";
    })
    .catch(console.log)
}
