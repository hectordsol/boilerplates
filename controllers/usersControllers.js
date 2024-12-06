const axios = require("../config/axios");

exports.getUsers = async (req, res) => {
    try {
    const {data} = await axios.get('/users');
        res.json(data);
    }
    catch (error) {
    console.log("Error getUsers: ", error);

    }
};

exports.createUser = async (req, res) =>
{
    try{
        const {data} = await axios.post('/users',req.body);
        res.status(201).json(data);
    }
    catch(error) {
        console.log("Error createUser: ", error);
    }
};

exports.getUserById = async (req, res) =>
    {
    try{
        const {id} = req.params;
        const {data} = await axios.get(`/users/${id}`);
        res.status(200).json(data);
    }
    catch(error) {
        console.log("Error getUserById: ", error);
    }
};
exports.updateUser = async (req, res) =>
{
    try{
        const {id} = req.params;
        const {data} = await axios.put(`/users/${id}`,req.body);
        res.status(200).json(data);
    }
    catch(error) {
        console.log("Error updateUser: ", error);
    }
};
exports.deleteUser = async (req, res) =>
    {
    try{
        const {id} = req.params;
        const {data} = await axios.delete(`/users/${id}`);
        res.json(data);
    }
    catch(error) {
        console.log("Error deleteUser: ", error);
    }
};