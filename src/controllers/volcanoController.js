import { Router } from "express";
import volcanoService from "../services/volcanoService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import Volcano from "../models/Volcano.js";

const volcanoController = new Router();

function getVolcanoTypeData({typeVolcano}) {
    const volcanoTypes = ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield'];

    const viewData = volcanoTypes.map(type => ({value: type, label: type, selected: typeVolcano === type ? 'selected' : ''}));

    return viewData;
}

volcanoController.get('/create', (req, res) => {
    const volcanoTypeData = getVolcanoTypeData({});
    res.render('create', {title: 'Create Page', volcanoType: volcanoTypeData});
}); 

volcanoController.post('/create', async (req, res) => {
    const volcanoData = req.body; 
    const userId = req.user._id;

    try {
        await volcanoService.create(volcanoData,userId); 
        res.redirect('/volcanoes');
    } catch (err) {
        const error = getErrorMessage(err);
        const volcanoTypeData = getVolcanoTypeData(volcanoData);
        res.render('create', {title: 'Create Page', volcano: volcanoData, volcanoType: volcanoTypeData, error});
    }
}); 

volcanoController.get('/volcanoes', async (req, res) => {
    const volcanoes = await volcanoService.getAll().lean();
    res.render('catalog', {title: 'Catalog Page', volcanoes}); 
    // res.render('catalog', {title: 'Catalog Page'}); 
}); 

volcanoController.get('/volcanoes/:volcanoId/details', async (req, res) => {
    const volcano = await volcanoService.getOne(req.params.volcanoId).lean();
    const isOwner = volcano.owner.toString() === req.user?._id; 
    const isVoted = volcano.voteList?.some(userId => userId.toString() === req.user?._id); 
    const voteCount = volcano.voteList?.length || 0;
    res.render('details', {title: 'Details Page', volcano, isOwner, isVoted, voteCount});
}); 

volcanoController.get('/volcanoes/:volcanoId/vote', async (req, res) => {
    const volcanoId = req.params.volcanoId; 
    const userId = req.user._id; 

    try {
        await volcanoService.vote(volcanoId, userId); 
        res.redirect(`/volcanoes/${volcanoId}/details`); 
    } catch (err) {
        console.log(err);
    }
}); 

volcanoController.get('/volcanoes/:volcanoId/delete', async (req, res) => {
    try {
        await volcanoService.remove(req.params.volcanoId);
        res.redirect('/volcanoes');
    } catch (err) {
        console.log(err);
    }
}); 

volcanoController.get('/volcanoes/:volcanoId/edit', async (req, res) => {
    const volcano = await volcanoService.getOne(req.params.volcanoId).lean();
    const volcanoTypes = getVolcanoTypeData(volcano);
    console.log(volcanoTypes);
    res.render('edit', {title: 'Edit Page', volcano, volcanoTypes}); 
})

export default volcanoController;