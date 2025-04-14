
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('numbers')
const symbolEl = document.getElementById('symbols')
const clipboardEl = document.getElementById('clipboard')
const generateBtn = document.getElementById('generate')


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbol = '!@#$%^&*()_{}[]=<>?:;|.,'
  return symbol[Math.floor(Math.random() * symbol.length)]
}

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasUpper = uppercaseEl.checked
  const hasLower = lowercaseEl.checked
  const hasNumber = numberEl.checked
  const hasSymbol = symbolEl.checked
  resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})

function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol

  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

  if (typesCount === 0) {
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    typeArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
      // console.log(generatedPassword)
    })
  }


  const finalPassword = shufflePassword(generatedPassword.slice(0, length));

  // console.log(finalPassword)
  return finalPassword;
}

function shufflePassword(password) {
  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}


clipboardEl.addEventListener('click', () => {
  const password = resultEl.innerText

  if (!password) { return }

  navigator.clipboard.writeText(password)
    .then(() => alert("Copied to clipboard!"))
    .catch(err => console.error("Failed to copy:", err));

  //  Old Method
  // const textarea = document.createElement('textarea')
  // textarea.value = password
  // document.body.appendChild(textarea)
  // textarea.select()
  // Document.execCommand('copy')
  // textarea.remove()
  // alert("Copied to clipboard!")

})