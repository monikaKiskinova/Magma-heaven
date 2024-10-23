import Volcano from "../models/Volcano.js";

const volcanoService = {
    create(volcanoData, userId) {
        return Volcano.create({...volcanoData, owner: userId});
    }, 
    getAll() {
        return Volcano.find();
    }, 
    getOne(volcanoId) {
        return Volcano.findById(volcanoId);
    },
    vote(volcanoId, userId) {
        return Volcano.findByIdAndUpdate(volcanoId, {$push: {voteList: userId}}, {runValidators: true});
    },
    remove(volcanoId) {
        return Volcano.findByIdAndDelete(volcanoId);
    },
    edit(volcanoId, volcanoData) {
        return Volcano.findByIdAndUpdate(volcanoId, volcanoData, {runValidators: true});
    },
}

export default volcanoService;