import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router(); 

userController.get('/register', (req, res) => {
    res.render('register', {title: 'Register Page'});
});

userController.post('/register', async (req, res) => {
    const {username, email, password, rePassword} = req.body;

    try {
        await userService.register(username, email, password);
        res.redirect('/');
    } catch(err) {
        console.log('An error occurred', err.message);
        res.render('register', {title: 'Register Page', username, email});
    }
});

export default userController;