document.getElementById('convert-btn').addEventListener('click', function() {
  const numberInput = document.getElementById('number');
  const number = parseInt(numberInput.value);
  const output = document.getElementById('output');
  const error = document.getElementById('error');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  
    if (!numberInput.value) {
      output.textContent = 'Please enter a valid number.';
      openPopup();
      return;
  }
  
    if (number < 1) {
      output.innerHTML = 'Please enter a number greater than or equal to 1.';
      error.textContent = '';
      return;
    }
  
    if (number > 3999) {
      output.innerHTML = 'Please enter a number less than or equal to 3999.';
      error.textContent = '';
      return;
    }
  
    const roman = convertToRoman(number);
    if (roman) {
      output.innerHTML = `<span>${roman}</span>`;
      error.textContent = '';
    } else {
      output.innerHTML = `<span>Enter the Number & hit convert</span>`;
      error.textContent = 'Please enter a valid number between 1 and 3999.';
    }
  });
  
  function convertToRoman(num) {
    if (num < 1 || num > 3999) return null;
  
    const lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let roman = '';
    for (let key in lookup) {
      while (num >= lookup[key]) {
        roman += key;
        num -= lookup[key];
      }
    }
    return roman;
  }
  
  function openPopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    error.textContent = '';
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }
  