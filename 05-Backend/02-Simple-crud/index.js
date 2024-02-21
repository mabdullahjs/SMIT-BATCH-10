const express = require('express')
const app = express()
const port = 3000


//middleware
app.use(express.json());


const arr = [];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//get all users
app.get('/api/v1/users', (req, res) => {
    res.send(arr)
})

//add user
app.post('/api/v1/users', (req, res) => {
    const { title } = req.body;
    arr.push({
        title: title,
        id: Date.now(),
    })
    res.send('user added successfully');
})

//delete user
app.delete('/api/v1/users/:id', (req, res) => {
    const { id } = req.params
    const index = arr.findIndex((user) => user.id === Number(id));
    if (index === -1) {
        res.send('user not found');
        return
    }
    arr.splice(index, 1);
    res.send('user deleted');
})

//edit user
app.put('/api/v1/users/:id', (req, res) => {
    const { title } = req.body;
    const { id } = req.params;
    const index = arr.findIndex((user) => user.id === Number(id));
    if (index === -1) {
        res.send('user not found');
        return
    }
    arr[index].title = title
    res.send('user edited successfully')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})