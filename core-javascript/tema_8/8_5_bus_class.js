

class Vehicle {

    constructor(name, max_speed, mileage){
        this.name = name;
        this.max_speed = max_speed;
        this.mileage = mileage;
    }

    seating_capacity(capacity){
        console.log("The seating capacity of a ".concat(this.name, " is ", capacity, " passengers"));
    }
}

class Bus extends Vehicle {
    constructor(name, max_speed, mileage, stop_data) {
        super(name, max_speed, mileage);
        this.capacity = 50;
        this.stop_data = stop_data;
    }

    seating_capacity(){
        console.log("The seating capacity of a ".concat(this.name, " is ", this.capacity, " passengers"));
    }

    print_itinerary(){
        console.log(this.name.concat(" itinerary stops"));
        for (let stop in this.stop_data)
        {
            console.log(this.stop_data[stop]);
        }
    }
}


let basic_vehicle = new Vehicle("Yepe", 120, 2345);
basic_vehicle.seating_capacity(10);
console.log(basic_vehicle.max_speed);

let night_bus = new Bus("Night Bus", 500, 100000, ["iturrama", "san jorge", "san juan"]);
night_bus.seating_capacity();
console.log(night_bus.max_speed);
night_bus.print_itinerary();
