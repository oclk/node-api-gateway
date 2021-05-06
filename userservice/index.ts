import express from 'express';
const app = express();

// The controller that returns User fake data
app.get('/users', (req, res) => {
    const users = [
        { name: "John Cart", age: "23", gender: "male" },
        { name: "Omer Celik", age: "28", gender: "male" },
        { name: "Jasmine Crapt", age: "23", gender: "female" },
        { name: "Jack Carmen", age: "54", gender: "male" },
        { name: "Helen Narment", age: "34", gender: "female" },
    ]
    res.send(users);
})

// User Service app runs
app.listen(3001, () => {
    console.log('🚀 The application is listening on port 3001!');
})