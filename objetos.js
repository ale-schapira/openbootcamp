// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const obj= {
    name: "Ale",
    surname: "Scha",
    age: 26,
    height: 155,
    isDeveloper: true
}

//- Una variable que obtenga tu edad a partir del objeto anterior 

const objAge = obj.age;
console.log(objAge)

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const list= [
    {
        ...obj
    },
    {
        name: "Juana",
        surname: "Díaz",
        age: 30,
        height: 160,
        isDeveloper: false
    },
    {
        name: "Tere",
        surname: "Col",
        age: 29,
        height: 158,
        isDeveloper: false
}
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const oList= list.sort((a,b) => b.age - a.age)
console.log(oList)
