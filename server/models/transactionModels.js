import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId : {type: String, required: true},
    plan : {type: String, required: true},
    amount : {type: Number, required: true},
    credits : {type: Number, required: true},
    payment : {type: Boolean, default: false},
    date: {type: Number},
})

// mongoose.models.transaction will check the existing models in the name of transaction if not ("||")OR operator will execute
const transactionModels = mongoose.models.transaction || mongoose.model("transaction", transactionSchema)

export default transactionModels;