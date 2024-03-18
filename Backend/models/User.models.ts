import mongoose, { Schema, Document } from 'mongoose';
const bcrypt = require("bcrypt");

interface IUser extends Document {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                const emailRegex: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
                return emailRegex.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => {
                const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
                return passwordRegex.test(value);
            },
            message: () => `Password must be longer than 8 characters with numbers and letters.`
        }
    }
}, { timestamps: true });

userSchema.pre<IUser>('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
