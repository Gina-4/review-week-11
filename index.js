const randomColors = [
    '#FFB17A',
    '#0A1128',
    '#BEE7B8',
    '#713E5A',
    '#0B4F6C',
    '#20BF55'
  ];

  const selectButtton = document.getElementById('selectButton')
  const randomSelect = document.getElementById('randomSelect')
  const inputValue = document.getElementById('myInput').value
const randomColors = Math.floor(Math.random() * randomColors.length);

  selectButtton.addEventListener('click', function() {
    console.log('')
    });
    

document.getElementById('myInput').addEventListener('click' function() {
    const text = document.getElementById('myInput').value;
    console.log('inputValue', text);
});



  randomSelect.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    console.log(randomColors[randomIndex]); 
  });
  let randomSelect = document.getElementById(`color-${randomIndex}`)
  myInput.style.backgroundColor = '#FFB17A';