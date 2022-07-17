// Fecha de hoy

const actualDate= new Date();
console.log(actualDate); 

// Fecha de nacimiento

const birthday= new Date (1992, 04, 31 );
console.log(birthday);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let dateComparator= actualDate > birthday;
console.log(dateComparator);

// - Una variable que contenga el día de tu nacimiento

let birthDay= birthday.getDate();
console.log(birthDay);

// - Una variable que contenga el mes de tu nacimiento

let monthDay= birthday.getMonth();
console.log(monthDay +1);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let birthYear= birthday.getFullYear();
console.log(birthYear);