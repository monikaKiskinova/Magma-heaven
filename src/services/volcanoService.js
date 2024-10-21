import Volcano from "../models/Volcano.js";

const volcanoService = {
    create(volcanoData, userId) {
        return Volcano.create({...volcanoData, owner: userId});
    }, 
    getAll() {
        return Volcano.find();
    }
}

export default volcanoService;