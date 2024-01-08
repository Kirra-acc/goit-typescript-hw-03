class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  abstract openDoor(key: Key): boolean;
  //   abstract closeDoor(key: Key): boolean;

  comeIn(person: Person): void {
    if (!this.door) {
      console.log("Sorry, the door is closed");
    } else {
      this.tenants.push(person);
      console.log("The door is opened. Person is iside");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      console.log("This door is closed. Key is not matching");
    }
    console.log("This door is opened");
    return (this.door = true);
  }
  //   closeDoor(key: Key) {
  //     if (key.getSignature() !== this.key.getSignature()) {
  //       console.log("This door is closed. Key is not matching");
  //     }
  //     console.log("This door is opened");
  //     return (this.door = false);
  //   }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

// house.closeDoor(key);
export {};
