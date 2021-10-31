import express from 'express';

//import {v4 as uuid4 } from 'uuid';

//uuid4();

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

let users = [
   /*
    { 
        firstName: "John",
        lastName: "Doe",
        age: 25
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 27
        

        }
*/
]

/*
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
    //res.send('hello, my first get');
})

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');

    const user = req.body;

    const userID = uuid4();

    const userWithID = {...user, id: userID};
    
    users.push(userWithID);
    
    res.send(`User with name of ${user.firstName} added to database!`);
})

router.get('/:id', (req,res) => {
    const {id} = req.params;
    
    const foundUser = users.find((user) => user.id == id);
    
    console.log(req.params);
    res.send(foundUser);

    //res.send('get id route');
 }
 );

 router.delete('/:id', (req,res) => {
    const {id} = req.params;

    users = users.filter ((user) => user.id !== id);

    res.send('id deleted !')
 }
 );

 router.patch('/:id', (req, res) => {
    const {id} = req.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id == id);

    if (firstName) {
        user.firstName = firstName
    }

    if (lastName) {
        user.lastName = lastName
    }

    if (age) {
        user.age = age
    }

    res.send(`user with ${id} updated!`);

 }
  
 );

*/

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;