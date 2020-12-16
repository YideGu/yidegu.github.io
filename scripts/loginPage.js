$(document).ready(function() {

  function onSuccess(googleUser){
  	var profile = googleUser.getBasicProfile();
  	var name = profile.getGivenName();
  	var email = profile.getEmail();
    localStorage.setItem("User_name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("reload", true);
    //localStorage.setItem("greeting_exsit", JSON.stringify(false));
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
    window.location.href='index.html';
  }
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'onsuccess': onSuccess,
    'onfailure': onFailure
    });
  }
function onFailure(error) {
    alert("Please sign in with your UM account")
    }

})
