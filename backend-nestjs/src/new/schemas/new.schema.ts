import { Schema } from "mongoose";

export const NewSchema = new Schema ({
    created_at: Date,
    title: String,
    story_title: String,
    url: String,
    story_url: String,
    author: String,
    story_id: Number,
    state: Boolean,
});