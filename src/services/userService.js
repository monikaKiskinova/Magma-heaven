import User from "../models/User.js";

const userService = {
    async register(username, email, password, rePassword) {
        const user = await User.findOne({$or: [{email}, {username}]});

        if (password !== rePassword) {
            throw new Error('Password mismatch');
        }

        if(user) {
            throw new Error('User already exists');
        }

        return User.create({
            username, 
            email, 
            password,
        });
    }
};

export default userService;