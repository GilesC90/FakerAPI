

const faker = require('faker');
const express = require('express');
// console.log(express);
const app = express();
const port = 5500;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor() {
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = [
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.address.country()
        ]
    }
}

app.get("/api", (req, res) => {
    res.json({ message: "Our express api server is now sending this over to the browser"});
    console.log("Hey, from server.js. Its Giles.")
});

app.get("/api/users/new", (req, res) => {
    console.log("Hey, from server.js. Its Giles.")
    console.log(new User);
    res.json( new User );
});

app.get("/api/company/new", (req, res) => {
    console.log("Hey, from server.js. Its Giles.")
    console.log( new Company )
    res.json( new Company );
});


app.get("/api/user/company/", (req, res) => {
    console.log("Hey, from server.js. Its Giles.")
    res.json( {user: new User(), company: new Company()} );
});







const server = app.listen(port, () => {
    console.log(`Server is locked and loaded on port ${port}!`)
})