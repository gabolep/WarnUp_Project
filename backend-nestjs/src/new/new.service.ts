import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { New } from './interfaces/new.interface';
import { CreateNewDTO } from './dto/new.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { parse } from 'path/posix';
import { Cron, CronExpression } from '@nestjs/schedule';


@Injectable()
export class NewService { 

    BASE_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';

    private readonly logger = new Logger(NewService.name);

    constructor(@InjectModel('New') private readonly newModel: Model<New>, private readonly httpService: HttpService) {}

    //return the news saved in mongoDB
    async getNews(): Promise<New[]>{
        const news = await this.newModel.find();
        return news;    
    }

    //consult the api every hour
    @Cron(CronExpression.EVERY_HOUR)
    async consultApi(){
        const data = await this.sendData();
        for(let i=0; i < data.length; i= i + 1){
            if(data[i].story_id != null){
                if(data[i].url != null || data[i].story_url != null){
                    if(data[i].title != null || data[i].story_title != null){
                        const n = await this.getNew(data[i].story_id.toString());
                        if(!n){    
                            await this.createNew(data[i]);
                        }
                    }
                }
            }
        }
        this.logger.debug("connecting to api (every hour)");
    }

    //returns a specific news searched through story_id
    async getNew(newID: string): Promise<New>{        
        const n = await this.newModel.findOne({story_id: parseInt(newID)}).exec();
        return n;
    }

    //create a news and save it in mongoDB
    async createNew(createNewDto: CreateNewDTO): Promise<New>{
        const n = new this.newModel(createNewDto);
        return await n.save();        
    }

    

    //returns the data from the api
    async sendData(): Promise<New[]>{
        const { data } = await this.httpService.get(this.BASE_URL).toPromise();
        const news = data['hits'];
        const fullData = news.map(n => {
            const N: CreateNewDTO = {
                created_at: n.created_at,
                title: n.title,
                url: n.url,
                author: n.author,
                story_id: n.story_id,
                story_title: n.story_title,
                story_url: n.story_url,
                state: true
            }
            return N;
        });
        return fullData;
   }

   //update the state of the news to false
   async updateNew(newID: string): Promise<New>{
       const updatedNew = await this.newModel.findOneAndUpdate({story_id: parseInt(newID)},{ state: false});
       return updatedNew;
   }

   /*
    async deleteNew(newID: string): Promise<New>{
        const deletedNew = await this.newModel.findByIdAndDelete(newID);
        return deletedNew;
    }
    */
 }
