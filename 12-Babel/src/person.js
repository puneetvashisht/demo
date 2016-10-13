class Person{
    constructor(name){
//        super();
        console.log("Instatiating a new person with name "+name);
        this.name = name;
    }
    work(){
        console.log(this.name + " does not work");
    }
}

module.export.Person = Person;