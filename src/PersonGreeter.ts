export class personGreeter {
    constructor(private firstName: string, private secondName: string, private dateOfBirth?: Date){}

    greet () {
    console.log (`Hello ${this.firstName} ${this.secondName}, your date of birth is ${this.dateOfBirth?.toDateString()}`)
    }

}