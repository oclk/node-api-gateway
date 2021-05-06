import express from 'express';
const app = express();

// The controller that returns Todo fake data
app.get('/todos', (req, res) => {
    const todos = [
        { id: 1, title: "Todo - 1", completed: false },
        { id: 2, title: "Todo - 2", completed: true },
        { id: 3, title: "Todo - 3", completed: false },
        { id: 4, title: "Todo - 4", completed: true },
        { id: 5, title: "Todo - 5", completed: false },
    ]
    res.send(todos);
})

// Todo Service app runs
app.listen(3002, () => {
    console.log('🚀 The application is listening on port 3002!');
})