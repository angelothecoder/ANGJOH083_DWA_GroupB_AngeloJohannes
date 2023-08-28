class apartment {
    constructor(colour, numOfDoors, numOfWindows, numOfRooms){
        this.colour = colour;
        this.numOfDoors = numOfDoors;
        this.numOfWindows = numOfWindows;
        this.numOfRooms = numOfRooms;
    }

    showColor(){
        return this.colour;
    }

    showNumDoors(){
        return this.numOfDoors;
    }

    showNumWindows(){
        return this.numOfWindows;
    }

    showNumRooms(){
        return this.numOfRooms

    }
}

class house extends apartment{
    constructor(colour, numOfDoors, numOfWindows, numOfRooms, numOfGarages, numOfStories){
        super(colour, numOfDoors, numOfWindows, numOfRooms);
        this.numOfGarages = numOfGarages;
        this.numOfStories = numOfStories;
    }

    showNumGarages(){
        return this.numOfGarages
    }

    showNumStories(){
        return this.numOfStories
    }
}

let apartment1 = new apartment("red",2,8,6);

console.log(apartment1.showColor)