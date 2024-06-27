document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('text-input');
    const checkPalindromeBtn = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');
  
    const isPalindrome = str => {
      const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      return cleanStr === cleanStr.split('').reverse().join('');
    };
  
    const displayResult = (input, isPalindrome) => {
      const pTag = document.createElement('p');
      pTag.className = 'user-input';
      pTag.innerHTML = `<strong>${input}</strong> ${isPalindrome ? 'is' : 'is not'} a palindrome.`;
      resultDiv.replaceChildren(pTag);
      resultDiv.classList.remove('hidden');
    };
  
    const checkForPalindrome = () => {
      const input = userInput.value.trim();
      if (input === '') {
        alert('Please input a value');
        return;
      }
      displayResult(input, isPalindrome(input));
      userInput.value = '';
    };
  
    checkPalindromeBtn.addEventListener('click', checkForPalindrome);
    userInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        checkForPalindrome();
      }
    });
  });