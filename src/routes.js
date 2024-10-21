import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";
import volcanoController from "./controllers/volcanoController.js";

const router = Router(); 

router.use(homeController);
router.use(userController);
router.use(volcanoController);

router.all('*', (req, res) => {
    res.render('404', {title: '404 Page'});
})

export default router; 