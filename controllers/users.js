import { v4 as uuid4 } from 'uuid'; 

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    /*const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);*/

    console.log('POST ROUTE REACHED');

    const user = req.body;

    const userID = uuid4();

    const userWithID = {...user, id: userID};
    
    users.push(userWithID);
    
    res.send(`User with name of ${user.firstName} added to database!`);
};

export const getUser = (req, res) => {
   // res.send(req.params.id)

   const {id} = req.params;
    
   const foundUser = users.find((user) => user.id == id);
   
   console.log(req.params);
   res.send(foundUser);

   //res.send('get id route');
};

export const deleteUser = (req, res) => { 
    //console.log(`user with id ${req.params.id} has been deleted`);
    //users = users.filter((user) => user.id !== req.params.id);

    const {id} = req.params;

    users = users.filter ((user) => user.id !== id);

    res.send('id deleted !')
};

export const updateUser =  (req,res) => {
    //const user = users.find((user) => user.id === req.params.id);
    //user.username = req.body.username;
    //user.age = req.body.age;
    //console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)

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



};