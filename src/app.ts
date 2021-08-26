import { personGreeter } from "./PersonGreeter";

//const firstName = "Adam";
//const secondName = "Boley";

//console.log (`Hello ${firstName} ${secondName}`);
//This prints "Hello Adam Boley". Console.log is the command used to print something in the terminal

type Person = {
    firstName: string;
    secondName: string;
    dateOfBirth?: Date;
    height: number;
};//The type thing is named, in this case, Person
//Person contains a number of properties, in this case 4, and each designated what each property is - a string, a date, a number, etc
//Numeric measurements (heights, lengths) may be defined as numbers or strings. The only difference is that strings must have "" around their values. Numbers do not. 
//defining numeric measurements as numbers may allow other, whackier things to be done, perhaps with code that specifically targets numbers?

const me : Person = {
    firstName: 'Adam',
    secondName: 'Boley',
    dateOfBirth: new Date(1992, 9, 7),
    height: 178
};// The const thing is a data-file of sorts, storing data on the person in this case. A comma must separated each piece of data
//person is a Person, i.e the const person is of type Person

const bro : Person = {
    firstName: 'Stuart',
    secondName: 'Boley',
    dateOfBirth: new Date(1995, 3, 20),
    height: 183
}// all const things of the same type, i.e all Person types must have the same properties

 //Arrow functions
 //const sayHelloToPerson = (p: Person) => {
    // Body of method
    // DRY
    //console.log(`Hello ${p.firstName} ${p.secondName} your date of birth is ${p.dateOfBirth?.toDateString()}`)
//};

//sayHelloToPerson(person);

const greeter1 = new personGreeter("Adam", "Boley", new Date(1992, 9, 7), 178);
greeter1.greet();
//This is how you call an imported function. You need to define all of the terms, which are called properties, in the associated file that is exported. 

const greeter2 = new personGreeter("Stuart", "Boley", new Date(1995, 3, 20), 183);
greeter2.greet();

//greeter cannot be called more than once. In order to have it multiple times, change it in some way each time. Here, numbers have been put after to differentiate them
//This is because const things cannot be given the same name

//The strength of this code structure is that the code that displays the printed text is only written once. This is the code stored externally in the PersonGreeter.ts file
//Multiple const things can be defined, and can be called using the const greeterX bits above. This saves having to type and store console.log.... multiple times
//This isn't so useful here, since the bits of code are similar, but would be useful for longer pieces of text.

// to run this application, type npm run start in the terminal

