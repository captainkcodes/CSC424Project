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
