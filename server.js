
// INITIALIZATION 

// APIs required
const express = require("express");
const faker = require("faker");

// Definition of variables
const app = express();

// For POST requests...
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// CLASS DEFINITION

// User Class
class User{
    constructor(){
        this._id = faker.random.uuid() ;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// Company Class
class Company{
    constructor(){
        this._id = faker.random.uuid() ;
        this.name = faker.name.firstName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// ROUTES

// Route for creating a new User
app.get("/api/users/new", (request, response) => {
  response.json({user: new User()});
});

// Route for creating a new Company
app.get("/api/companies/new", (request, response) => {
    response.json({company: new Company()});
});

// Route for creating a new Company
app.get("/api/user/company", (request, response) => {
    response.json({
        user: new User(),
        company: new Company()
    });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
