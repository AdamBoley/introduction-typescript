export class personGreeter 
{
    constructor(
        private firstName: string, 
        
        private secondName: string, 

        private dateOfBirth: Date, 

        private height: number)
        {}
        //It is not necessary to construct the constructor in this way, but it is clearer. 
        //A single line takes up less space, but I imagine that if the constructor takes up a lot of space, that is undesirable. 

    greet () {
    console.log (`Hello ${this.firstName} ${this.secondName}, your date of birth is ${this.dateOfBirth?.toDateString()}. Your height is ${this.height} cm.`)
    }
}

//in TypeScript, a required parameter cannot follow an optional parameter
// This code is exported to the app.ts file
//In the constructor bit, use the properties and their types in the order they appear in in the console.log code and in the code in the file being exported to. 
//Why? I think the computer looks for the things in order. In any case, for clarity and cleanliness, this seems like good practise.
//