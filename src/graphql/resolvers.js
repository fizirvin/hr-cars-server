import cars from './models/cars.js';


export const resolvers = {
  Query: {
    async cars(){
      return await cars.find();
    }
  },
  Mutation: {
    async newCar(_, { input }){
      const item = new cars(input);
      await item.save();   
      return item;
    },
    async updateCar(_,{ _id, input }){
      return await cars.findByIdAndUpdate(_id,input, {new: true });
    }
  }
}