console.log('\n\nStrings');

let testPhrase1: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
let testPhrase2: string = 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
let testPhrase3: string = 'Ut enim ad minim veniam, quis nostrud exercitation'
console.log('This is testPhrase1: ' + testPhrase1);
console.log('This is testPhrase2: ' + testPhrase2);
console.log('This is testPhrase3: ' + testPhrase3);
console.log('6th char in testPhrase1 is: ' + testPhrase1.charAt(6));
console.log('Concatanation of testPhrase1 and testPhrase2 and testPhrase3: ' + testPhrase1.concat(testPhrase2, testPhrase3));
console.log('Find indexOf char s in testPhrase1: ' + testPhrase1.indexOf('a'));
console.log('Find match of tempor in testPhrase2: ' + testPhrase2.match('tempor'));
console.log('Replace Lorem with IPSUM in testPhrase1: ' + testPhrase1.replace('Lorem', 'IPSUM'));
console.log('Find the word incididunt in testPhrase2: ' + testPhrase2.search('incididunt'));
console.log('Split testPhrase1 on separate words based on empty space: ' + testPhrase1.split(' ', 5));
console.log('Return first 12 characters of each phrase and concatenate them:  ' + testPhrase1.substring(0, 12) + testPhrase2.substring(0, 12) + testPhrase3.substring(0, 12));
console.log('Set testPhrase1 to uppercase: ' + testPhrase1.toUpperCase());
console.log('vslueOf testPhrase1:  ' + testPhrase1.valueOf());

console.log('\n\nRegex');

let regNumber: RegExp = /^\d+$/;
let regEmail: RegExp = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
let regPhoneNr: RegExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
let regFilePath: RegExp = /^[a-z]:((\\|\/)[a-z0-9\s_@\-^!#$%&+={}\[\]]+)+\.xml$/i;
let regHTMLtags: RegExp = /<[a-z][\s\S]*>/i;

function checkIfNumber (number: string){
    if (regNumber.test(number)){
        console.log(number + ' :is a valid number')
    } else {
        console.log(number + ' :is not a valid number')
    }
}
checkIfNumber('12345');
checkIfNumber('abcd123');
checkIfNumber('abcd');

function checkEmail (email: string){
    if (regEmail.test(email)){
        console.log(email + ' :is a valid email')
    } else {
        console.log(email + ' :is not a valid email')
    }
}
checkEmail('something@gmail.com');
checkEmail('something&gmail');
checkEmail('something.123.@');

function checkPhone (phone: string){
    if(regPhoneNr.test(phone)){
        console.log(phone + ' :is a valid phone number')
    } else {
        console.log(phone + ' :is not a valid phone number')
    }
}
checkPhone('(704) 933-3469');
checkPhone('1234567891');
checkPhone('00 40 450564123');

function checkPath(path: string){
    if (regFilePath.test(path)){
        console.log(path + ' :this is a valid path')
    } else {
        console.log(path + ' :this is an invalid valid path')
    }
}
checkPath('D:/test.xml');
checkPath('D:|\/folder/test.xml');
checkPath('D:/test.@qwerty');

function checkIfBold (phrase: string){
    if(regHTMLtags.test(phrase)){
        console.log(phrase + ' :this phrase contains bold tags characters')
    } else {
        console.log(phrase + ' :this phrase does not contain bold tags characters')
    }
}
checkIfBold('<b>lorem</b> ipsum dolor <b>sit</b> amet');
checkIfBold('lorem ipsum <b></b>dolor sit amet');
checkIfBold('consectetur adipiscing elit');




