import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
    }, 
    email: {
        type: String, 
        required: true,
    }, 
    password: {
        type: String, 
        required: true,
    },
});

userSchema.pre('save', async function () {
    const SALT_ROUNDS = 10; 
    const hash = await bcrypt(this.paassword, SALT_ROUNDS); 
    this.password = hash;
})

const User = model('User', userSchema);

export default User; 