import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    creditBalance: {type: Number, default: 5}
})

// mongoose.models.user will check the existing models in the name of user if not ("||")OR operator will execute
const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;