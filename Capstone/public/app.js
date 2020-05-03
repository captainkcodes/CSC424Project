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
        


  
        function signUp(){
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
        
           

            auth.onAuthStateChanged(function(user){
                if(user){
                    window.location.href="landingpage.html" 


                    ref.child(user.uid).set({
                        Freshmen: {
                          "Freshmenclass": "tba"
                          
                        },
                        Sophomore: {
                            "Sophomoreclass": "tba"
                            
                          },
                          Junior: {
                            "Juniorclass": "tba"
                            
                          },
                        Senior: {
                            "Seniorclass": "tba"
                          
                        }
                      });
                }  
            });

       
        }
        
        
        function signIn(){    
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));

            var user = firebase.auth().currentUser;
            
                    auth.onAuthStateChanged(function(user){
                        if(user){
                            window.location.href="landingpage.html"    
                        }  
                    });

        }
        
        
        function signOut(){    
            auth.signOut();     
                alert("Signed Out");

                auth.onAuthStateChanged(function(user){
                    if(user){
                            
                    }else{
                        window.location.href="index.html"
                    }  
                });  
        }
        

        
    

document.addEventListener("DOMContentLoaded", event => {
const app = firebase.app();
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => { 
        auth.onAuthStateChanged(function(user){
            if(user){
                window.location.href="landingpage.html" 

              
                ref.child(user.uid).set({
                    Freshmen: {
                        "Freshmenclass": "tba"
                        
                      },
                      Sophomore: {
                          "Sophomoreclass": "tba"
                          
                        },
                        Junior: {
                          "Juniorclass": "tba"
                          
                        },
                      Senior: {
                          "Seniorclass": "tba"
                        
                      }
                  });   
            }  
        });

    })
    .catch(console.log)
}
