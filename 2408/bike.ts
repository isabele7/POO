class Address {
    constructor(
      public street: string,
      public neighborhood: string,
      public city: string,
      public state: string,
      public postcode: string
    ) {}
  }
  
export class Bike {
    constructor(
      public name: string,
      public type: string,
      public bodySize: number,
      public maxLoad: number,
      public rate: number,
      public description: string,
      public ratings: number,
      public address: Address,
      public imageUrls: string[],
      public available: boolean = true,
      public id?: string
    ) {}
  
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
          },
          (error) => {
            throw new Error("Bike location unavailable.");
          }
        );
      } else {
        throw new Error("Bike location unavailable.");
      }
    }
  }  
