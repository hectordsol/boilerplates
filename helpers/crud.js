const axios = require('../config/axios');
module.exports = {
    find: async path => {
        try {
            const {data} = await axios.get(path);
            return data;
        } catch (error) {
            const {errors} = error;
            throw errors;
        }
    },
    create: async (path, body) => {
        try {
            const {data} = await axios.post(path,body);
            return data;
        } catch (error) {
            const {errors} = error;
            throw errors;
        }
    },
    update: async (path, body) => {
        try {
            const {data} = await axios.put(path,body);
            return data;
        } catch (error) {
            const {errors} = error;
            throw errors;
        }
    },
    erase: async (path) => {
        try {
            const {data} = await axios.delete(path);
            return data;
        } catch (error) {
            const {errors} = error;
            throw errors;
        }
    }
}