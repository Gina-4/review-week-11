const randomColors = [
    '#FFB17A',
    '#0A1128',
    '#BEE7B8',
    '#713E5A',
    '#0B4F6C',
    '#20BF55'
  ];

  const selectButton = document.getElementById('selectButton')
  const randomSelect = document.getElementById('randomSelect')
  const inputValue = document.getElementById('myInput')
const randomIndex = Math.floor(Math.random() * randomColors.length);
const inputText = document.getElementById('inputText')
const favButton = document.getElementById('favButton')
const favColorBox = document.getElementById('favColorBox')

// button function 
  selectButton.addEventListener('click', function() {
    // input text value to display color
    const text = document.getElementById('inputText').value;
    console.log(text)
    // styling
    inputValue.style.backgroundColor = text;
    });
    
// button function
randomSelect.addEventListener('click', function() {
  // random color from array
 const randomIndex = Math.floor(Math.random() * randomColors.length);
    console.log(randomColors[randomIndex]); 
  inputValue.style.backgroundColor = randomColors[randomIndex]; 
  favColorBox.style.color = "blue";

  });
// button function with styling
  favButton.addEventListener('click', function() {
favColorBox.style.backgroundColor = "orange";
favColorBox.style.color = "red";
  })
