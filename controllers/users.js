let users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        id: 2,
        firstName: "Alice",
        lastName: "Smith",
        age: 30
    }
]

export const createUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);

    res.send(newUser);
}

export const getUserList = (req, res) => {
    res.send(users);
}

export const getCurrentUser = (req, res) => {
    res.send(users.find(user => user.id === parseInt(req.params.id)));
}

export const deleteUser = (req, res) => {
    const deletedUser = users.find(user => user.id === parseInt(req.params.id));

    users = users.filter(user => user.id !== deletedUser.id);

    res.send(deletedUser);
} 

export const updateUser = (req, res) => {
    const { firstName, lastName, age } = req.body;
    const index = users.findIndex(user => user.id === parseInt(req.params.id));

    if (index !== -1) {
        users[index] = { ...users[index], firstName, lastName, age };
        res.send(users[index]);
    } else {
        res.status(404).send("User not found");
    }
}