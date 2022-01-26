import { Document } from "mongoose";

export interface New extends Document{
    created_at: Date;
    title: string;
    story_title: string;
    url: string;
    story_url: string;
    author: string;
    story_id: number;
    state: Boolean;
}