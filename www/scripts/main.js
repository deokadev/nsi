let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefoxico.png') {
      myImage.setAttribute('src', 'images/firefoxico2.png');
    } else {
      myImage.setAttribute('src', 'images/firefoxico.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.getElementById('name');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = myName;
  }

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = storedName;
}

myButton.addEventListener('click', function() {
    setUserName();
  });

let couleur = 'rouge';

if (couleur === 'rouge' || couleur === 'bleu' || couleur === 'jaune') {
    console.log("C'est une couleur primaire")
} else {
    console.log("Ce n'est pas une couleur primaire")
}

function average(x,y) {
    result = (x + y)/2
    return result
}

console.log(average(2,7));