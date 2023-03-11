var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/darya_with_cat_openenig_img.jpg') {
      myImage.setAttribute ('src','images/darya_in_glasses_img.jpg');
    } else {
      myImage.setAttribute ('src','images/darya_with_cat_openenig_img.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Check this, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Check this, ' + storedName;
  }
  myButton.onclick = function() {
  setUserName();
}