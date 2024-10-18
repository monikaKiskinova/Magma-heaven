const userService = {
    register(username, email, password) {
        return User.create({
            username, 
            email, 
            password,
        });
    }
};

export default userService;