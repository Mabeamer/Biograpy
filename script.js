// creating a function that validates if the form boxes have or have not been filled in, if they have the submit passes and no errors
// if not the submit fails and throws an error on what is missing.
function formCheck() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var tele = document.getElementById("telephone").value;
  var comp = document.getElementById("company").value;
  var email = document.getElementById("email").value;
  console.log(fname);
  console.log(lname);
  var valid = true;
  if(fname == ""){
    alert("please fill in your first name.");
    valid = false;
  }
  if(lname == ""){
    alert("please fill in your last name.");
    valid = false;
  }
  if(tele == ""){
    alert("please fill in your phone number.");
    valid = false;
  }
  if(comp == ""){
    alert("please fill in your company name");
    valid = false;
  }
  if(email == ""){
    alert("please fill in your email.");
    valid = false;
  }
  event.preventDefault();
}
function test() {
  console.log(event);
  event.preventDefault();
}

// $(document).ready(function() {
//   $('.pannel').slideDown();
// });
$(document).ready(function(){
  $('.pannel').delay(350).fadeIn('slow');
});
$(document).ready(function(){
  $('.pannel-left').delay(250).fadeIn('slow');
});
$(document).ready(function(){
  $('#profileimg').delay(580).fadeIn('slow');
});
$(document).ready(function(){
  $('#r2hlogo').delay(550).fadeIn('slow');
});
$(document).ready(function(){
  $('.contactForm').delay(250).fadeIn('slow');
});
$(document).ready(function(){
  $('.resumeContainer').delay(250).fadeIn('slow');
});
$(document).ready(function(){
  $('#resumeBanner').delay(300).fadeIn('slow');
});
