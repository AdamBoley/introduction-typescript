export class personGreeter {
    constructor(private firstName: string, private secondName: string, private dateOfBirth: string){}

    greet () {
    console.log (`Hello ${this.firstName}`)
    }
}