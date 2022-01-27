import { Test, TestingModule } from '@nestjs/testing';
import { NewService } from '../new.service';
import { getModelToken } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { NewModule } from '../new.module';
import { New } from '../new.model';
import { New as NewInterface } from '../interfaces/new.interface';
import { Model } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';





describe('NewService', () => {
  let service: NewService;
  let model: Model<NewInterface>;
 
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NewModule],      
    })
    .overrideProvider(getModelToken(New.name))
    .useValue(jest.fn())
    .compile();
    service = module.get<NewService>(NewService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  /*
  describe('getNews', () => {
    it('must return an Array of type New', async () => {
     
     
      
      //const result = await service.getNews();

      //expect(Array.isArray(result)).toBe(true);
    })
  })
  describe('SendData', () => {
    it('must return an Array of type New', async () => {
     
            
      const result = await service.sendData();

      expect(Array.isArray(result)).toBe(true);
    })
  })
  describe('getNew', () => {
    it('must return an Array of type New', async () => {
     
            
      //const result = await service.getNew("29977716");

      //expect(Array.isArray(result)).toBe(true);
    })
  })

  describe('consultApi', () => {
    it('must return an Array of type New', async () => {
     
            
      //const result = await service.consultApi();
     
      //expect(service.sendData).toHaveBeenCalledTimes(1);
      //expect(Array.isArray(result)).toBe(true);
    })
    describe('updateNew', () => {
      it('must return an Array of type New', async () => {
       
              
        //const result = await service.updateNew("29977716");
  
        //expect(Array.isArray(result)).toBe(true);
      })
    })
  })
 
    const mockNew = (
      created_at= new Date,
      title= 'new title',
      story_title= 'new story title',
      url= 'url',
      story_url= 'story-url',
      author= 'author',
      story_id= 1,
      state= true,

  ): New => ({
    created_at,
    title,
    story_title,
    url,
    story_url,
    author,
    story_id,
    state,
  });


  const newDocArray = [
    mockNew(),
      mockNew( new Date(),
      'new title',
      'new story title',
        'url',
        'story-url',
        'author',
        1,
        true,)
  ]
 */
});
