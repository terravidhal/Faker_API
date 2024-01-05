const express = require("express"); // import Express
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker'); // import Node

// Express middleware functions
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );




const createUser = () => {
   
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFake;
};
    

const createCompany  = () => {

    const newFake = {
        _id: faker.database.mongodbObjectId(),
        nameCompany: faker.company.name(),
        address:  {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    };
    return newFake;
};

const createUserCompany = () => {
   
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        Company: createCompany(),
    };
    return newFake;
};

    




// HOME api
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});


// Users api
const newFakeUser = createUser();

app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});


// Company api
const newFakeCompany  = createCompany();

app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
});



// Users-Company api

const newFakeUserCompany = createUserCompany();

app.get("/api/user/company", (req, res) => {
    res.json( newFakeUserCompany );
});






// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );