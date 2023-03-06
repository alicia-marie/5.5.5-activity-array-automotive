//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

/*You have been assigned the task of developing a new class for the new A28 Mercury sedan. 
The class will be written in JavaScript and will contain vehicle properties and 
methods that have previously been defined in the base class named vehicle.js. 
The new class is required to have the following properties and methods added.*/

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage)
    this.maximumPassengers = 5 
    this.passenger = 0
    this.numberOfWheels = 4
    this.maximumSpeed = 160
    this.fuel = 10
    this.scheduleService = false
    }

    loadPassenger(num){
        if(this.passenger < this.maximumPassengers){
        } else {
            console.log(this.model + " " + this.make + " is full");
            }

            if((num + this.passenger) <= this.maximumPassengers){
                this.passenger = num
                return this.passenger
            } else {
                console.log(this.make +' '+ this.model +'not enough seats for passengers');
            }    
    }

    start(){
        if (this.fuel > 0 ){
            console.log('Car Stated');
            return this.started = true;
        } else {
            console.log('No fuel');
            return this. started = false;
        }

    }

    checkService() {
        if (this.milage > 300){
        this.scheduleService = true
        console.log('Time for maintenance');
        }
    }

}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

v.start()
v.loadPassenger(5)
v.stop()
v.checkService()

console.log(v);