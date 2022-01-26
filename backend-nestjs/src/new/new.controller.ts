import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Query, NotFoundException, Param } from '@nestjs/common';
import { createInflateRaw } from 'zlib';
import { CreateNewDTO  } from './dto/new.dto';
import { NewService } from './new.service';
import { New } from './interfaces/new.interface';

@Controller('new')
export class NewController {

    constructor(private newService: NewService) {}

    //return all news from mongoDB
    @Get('/')
    async getAllNews(): Promise<New[]> {
        return this.newService.getNews();    
    }

    //Change the state of the new
    @Put('/update/:newID')
    async updateNew(@Param('newID') newID){
        const updatedNew = await this.newService.updateNew(newID);
        return updatedNew;  
     }


    // method to test in postman
        /* 
        //create new and saved in mongoDB
        @Post('/create')
        async createPost( @Body() createNewDTO: CreateNewDTO){
            console.log(createNewDTO);
            const n = await this.newService.createNew(createNewDTO);
            return n
        }
        */
    
        /*
        @Get('/:newID')
        async getNew(@Res() res, @Param('newID') newID ){
            const n = await this.newService.getNew(newID);
            res.status(HttpStatus.OK).json(n);
        }
        */

        /*
        delete the new from mongoDB
        @Delete('/delete')
        async deleteNew(@Res() res, @Query('newID') newID){
            const n = await this.newService.deleteNew(newID);
            if(!n) throw new NotFoundException('new does not exist');
            return res.status(HttpStatus.OK).json({
                message: 'Deleted',
                n
            })
        }
        */
}
