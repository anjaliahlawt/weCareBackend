const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    registeredDate: { type: String },   
             // note down the date registered
    location: { type: String },
    role: { type: String, default: "patient" },
    image: { type: String }
})

const PatientModel = mongoose.model("patient", patientSchema)

module.exports = {
    PatientModel
}