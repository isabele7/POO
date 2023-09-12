mport { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import crypto from 'crypto';
import { Crypt } from "./crypt";

export class App {
    users: User[] = []

    bikes: Bike[] = []
    rents: Rent[] = []
    crypt: Crypt = new Crypt()

    findUser(email: string){
        return this.users.find(user => user.email === email)
    }

    async registerUser(user: User): Promise<string> {
        if (this.users.some(rUser => { return rUser.email === user.email })) {
            throw new Error('User with same email already registered.')
        }
        const newId = crypto.randomUUID()
        user.id = newId
        const encryptedPassword = await this.crypt.encrypt(user.password)
        user.password = encryptedPassword
        this.users.push(user)
        return newId
    }

    async authenticate(userEmail: string, password: string): Promise<boolean>{
        const user = this.findUser(userEmail)
        if(!user) throw new Error('User not found.')
        return await this.crypt.compare(password, user.password)
    }

    removeUser(email: string): void {
        const index = this.users.findIndex(user => user.email === email);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }
    
    registerBike(bike: Bike): void {
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }

    rentBike(bikeId: string, userEmail: string): void {
        const bike = this.bikes.find(bike => bike.id === bikeId)
        if (!bike) {
            throw new Error('Bike not found.')
        }
        const user = this.findUser(userEmail)
        if (!user) {
            throw new Error('User not found.')
        }
        const startDate = new Date()
        bike.available = false
    }

    returnBike(bikeId: string, userEmail: string, startDate: Date, price: number): number{
        const today = new Date()
        const rent = this.rents.find(rent => 
            rent.bike.id === bikeId &&
            rent.user.email === userEmail
        )
        bike.available = true
        const totalTime = today.getTime() - startDate.getTime();
        return this.calculatePrice(price,totalTime)
    }

    calculatePrice(price: number, totalTime: number): number{
        return price * Math.floor(totalTime / (1000*60*60))
    }
 
    listUsers(): User[]{
        return this.users
    }

    listBikes(): Bike[]{
        return this.bikes
    }

    listRents(): Rent[]{
        return this.rents
    }
    
}
