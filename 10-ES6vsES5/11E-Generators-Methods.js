//es5
//  no equivalent in ES5

//es6
class Clz {
    * bar () {
        console.log("in Clz.bar")
    }
}
let c = new Clz();
c.bar().next();


let Obj = {
    * foo () {
        console.log("in Obj.foo")
    }
}