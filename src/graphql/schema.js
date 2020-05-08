import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
type Query {
    cars: [Car]
}

type Car {
    _id: ID!
    plates: String!
    model: String!
    type: String!
    brand: String!
    year: String!
    color: String!
    serial: String!
}



type Mutation { 
    newCar(_id: ID, input: NewCar ): Car
    updateCar(_id: ID, input: NewCar ): Car

}

input NewCar {
    plates: String!
    model: String!
    type: String!
    brand: String!
    year: String!
    color: String!
    serial: String!
}


`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});