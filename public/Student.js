import { Person } from './objects.js';
let student1 = new Person('Mike', 'Harald', 'Country: France Town: Paris Street: Rue de Soleil, nr 123', '1990-05-06', 678524678);
console.log(student1);
console.log("age of " + student1.firstname + ' ' + student1.lastname + ' is: ' + student1.personAge() + ' years old');
console.log(student1.addressFormat());
function submitForm() {
    const firstNameStudent = document.getElementById('firstname');
    const printFirstNameStudent = document.getElementById('enteredFirstName');
    const firstNameSt = firstNameStudent.value;
    printFirstNameStudent.textContent = firstNameSt.toString();
}
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitForm);
