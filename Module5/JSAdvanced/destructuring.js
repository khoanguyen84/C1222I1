let carApp = {
    name: "Vinfast",
    sit: 4,
    getName: function(){
        return name
    }
}
// console.log(carApp.getName());
// console.log(carApp.sit);

const { name, sit, getName } = carApp;

console.log(getName());
console.log(sit);