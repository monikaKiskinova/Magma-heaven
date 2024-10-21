import { Router } from "express";
import volcanoService from "../services/volcanoService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

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
})

export default volcanoController;