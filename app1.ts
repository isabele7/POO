rentBike(bikeId: string, userEmail: string): void {
    // Verifique se a bicicleta com o ID especificado está cadastrada.
    const bike = this.bikes.find(bike => bike.id === bikeId);
    if (!bike) {
        throw new Error('Bike not found.');
    }

    // Verifique se a bicicleta está disponível para aluguel.
    if (!bike.available) {
        throw new Error('Unavailable bike.');
    }

    const user = this.findUser(userEmail);
    if (!user) {
        throw new Error('User not found.');
    }

    // Atualize o status da bicicleta para não disponível.
    bike.available = false;

    // Crie uma nova instância de aluguel.
    const newRent = new Rent(bike, user, new Date());
    this.rents.push(newRent);
}
