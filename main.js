/******************
 * YOUR CODE HERE *
 ******************/
function xify(str){
  let newStr = [];
  for(let char of str){
    newStr.push('x')

  }
  let newStr2 = newStr.join('')
  return newStr2;
 }

 function yellingChars(str){
  let newStr = '';
  for(let char of str){
    newStr += char + '!'

  }
  
  return newStr;
 }

 function indexedChars(str){
  let newStr = '';
  for(let i=0; i < str.length; i++){
    newStr += i + str[i]
  }
  return newStr;
 }

 function numberedChars(str){
  let newStr = '';
  for(let i=0; i < str.length; i++){
    newStr += ('(' + (i + 1) + ')' + str[i])
  }
  return newStr;
 }

//  function exclaim(str){
//   for(let char of str){
//     if(char === '?'){
//       return str.replaceAll('?', '!')
//     }else if(char === '.'){
//       return str.replaceAll('.', '!')
//     }
//   }
  
//  }
function exclaim(str){
  let newStr = '';
  for(let char of str){
    if(char === '.' || char === '?'){
      newStr += '!'
    }else{
      newStr += char
    }
  }
  return newStr
}


//  function repeatIt(str, n){
//  let newStr = str.repeat(n);
//  return newStr;
//  }

function repeatIt(str, num){
  let repeated = 0;
  let output = "";
  while(repeated < num){
    output += str;
    repeated ++;
  }
  return output;
}

 
 function truncate(str){
  let newStr = str.slice(0, 15)
  if(str.length > 18){
    return newStr + '...'
  }else{return str;}
 }

//  function ciEmailify(str){
//   let firstName = str.slice(0,' ')
//   let lastName = str.slice(' ', str.length)
//   let email = firstName.toLowerCase() + lastName.toLowerCase() + '@codeimmersives.com'
//   newEmail = email.replaceAll(" ", ".")
//   return newEmail
//  }

function ciEmailify(str){
  let output = "";
  for (let i = 0; i < str.length; i++){
    if (str[i] === " "){
      output += ".";
    }else{
      output += str[i].toLowerCase();
    }
  }
  return output + "@codeimmersives.com";
}

//  function reverse(str){
//   let reverseStr = str.split('');
//   let reverseArr = reverseStr.reverse();
//   let joinStr = reverseArr.join('');
//   return joinStr;
//  }

function reverse(str){
  let newStr = '';
  for(let i = str.length-1; i >= 0; i--){
    newStr += str[i]
  }
  return newStr;
}

 function onlyVowels(str){
  let newStr = "";
  for(let char of str){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
      newStr += char
    }
  }
  return newStr;
 }

 function crazyCase(str){
  let newStr = "";
  for(let i=0; i < str.length; i++){
    if(i % 2 == 0){
      newStr += str[i].toLowerCase()
    }else{
      newStr += str[i].toUpperCase()
    }
 }
  
  return newStr;
 }

 

//  function titleCase(str){
//   let words = str.split(' ')
//   for(let i = 0; i < words.length; i++){
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
//   }
//   return words.join(' ')
// }

// function camelCase(str){
//   let words = str.split(' ')
//   for(let i = 0; i < words.length; i++){
//     if(words.indexOf(words[i]) === 0){ words[i] = words[i].toLowerCase()
//     }else{
//       words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
//     }
//   }
//   return words.join('')
// }
function titleCase(str){
  let output = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++){
    if (str[i - 1] === " "){
      output += str[i].toUpperCase();
    }else{
      output += str[i].toLowerCase();
    }
  }
  return output;
}

function camelCase(str){
  let output = str[0].toLowerCase();
  for (let i = 1; i < str.length; i++){
    if (str[i - 1] === " "){
      output += str[i].toUpperCase();
    }else if (str[i] === " "){
      continue;
    }else{
      output += str[i].toLowerCase();
    }
  }
  return output;
}



 function crazyCase2ReturnOfCrazyCase(str){
  let output = "";
  let letter = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i] === " "){
      output += str[i];
    }else if(letter % 2 === 0){
      output += str[i].toLowerCase();
      letter++;
    }else{
      output += str[i].toUpperCase();
      letter++;
    }
  }
  return output;
}



  





 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
