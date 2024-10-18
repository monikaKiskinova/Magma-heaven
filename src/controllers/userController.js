import { Router } from "express";

const userController = Router(); 

userController.get('/register', (req, res) => {
    res.render('register', {title: 'Register Page'});
});

export default userController;