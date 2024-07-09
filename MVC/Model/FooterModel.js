import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
    footer_heading: {
        type: String,
        required: true
    },
    footer_links: {
        type: [String],
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Footer", footerSchema);