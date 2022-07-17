// Un nuevo Set con los nombres de tu familia
const family= ["Ale", "Sofía", "Cristina", "Ricardo", "Lolo", "Mitzu"];
const familySet = new Set(family);

// Modifica el Set original añadiendo tu nombre (duplicado)
familySet.add("Ale");
console.log(familySet);

//Modifica el Set original añadiendo el nombre "Javascript"
familySet.add("JavaScript");
console.log(familySet);