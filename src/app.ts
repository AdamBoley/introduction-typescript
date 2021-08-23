import { personGreeter } from "./PersonGreeter";

const firstName = "Adam";
const secondName = "Boley";

console.log (`Hello ${firstName} ${secondName}`);

type Person = {
    firstName: string;
    secondName: string;
    dateOfBirth?: Date;
};

const person : Person = {
    firstName: 'Adam',
    secondName: 'Boley',
    dateOfBirth: new Date(1992, 9, 7)
};

// Arrow functions
const sayHelloToPerson = (p: Person) => {
    // Body of method
    // DRY
    console.log(`Hello ${p.firstName} ${p.secondName} your date of birth is ${p.dateOfBirth?.toDateString()}`)
};

sayHelloToPerson(person);

