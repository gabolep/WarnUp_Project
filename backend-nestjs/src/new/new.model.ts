import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NewDocument = New & Document;

@Schema()
export class New {

    @Prop()
    created_at: Date;

    @Prop()
    title: string;

    @Prop()
    story_title: string;

    @Prop()
    url: string;

    @Prop()
    story_url: string;

    @Prop()
    author: string;

    @Prop()
    story_id: Number;

    @Prop()
    state: boolean;

}


export const NewSchema = SchemaFactory.createForClass(New);