import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

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
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => /^\d{10}$/.test(value),
            message: (props: any) => `${props.value} It is not a number phone`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
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
