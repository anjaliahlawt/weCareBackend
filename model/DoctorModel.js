const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    registeredDate: { type: String },            // note down the date registered
    specialization: { type: String, enum: ["General","Radiology", "Neurology", "Dermatology", "Cardiologists", "Nephrologists", "Urologists", "Psychiatrists", "Pediatricians"], default: "General" },
    role: { type: String, default: "doctor" },
    image: { type : String},
    location : { type:String },
    videoCall: { type: String, enum: ["YES", "NO"], default: "NO" },
})

const DoctorModel = mongoose.model("doctor", doctorSchema)

module.exports = {
    DoctorModel
}