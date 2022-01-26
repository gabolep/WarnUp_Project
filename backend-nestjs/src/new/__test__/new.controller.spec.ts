import { Test, TestingModule } from '@nestjs/testing';
import { NewController } from '../new.controller';
import { NewModule } from '../new.module';
import { getModelToken } from '@nestjs/mongoose';
import { New } from '../new.model';
import { NewService } from '../new.service';
import { CreateNewDTO } from '../dto/new.dto';
import { Param, Res } from '@nestjs/common';


describe('NewController', () => {
  let controller: NewController;
  let newService; NewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NewModule],
    })
    .overrideProvider(getModelToken(New.name))
    .useValue(jest.fn())
    .compile();

    controller = module.get<NewController>(NewController);
    newService = module.get<NewService>(NewService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllNews', () => {
    it('must return an Array with all the news saved in mongodb', async () => {
      const Service = NewService;

      jest.spyOn(newService, 'getNews').mockImplementation(() =>
      Promise.resolve([{ name: 'example'}] as unknown as Promise<New[]>))
      

      const result = await controller.getAllNews();

      expect(result).toHaveLength(1)
      expect(newService.getNews).toHaveBeenCalledTimes(1);
      expect(Array.isArray(result)).toBe(true);

    })
  })
 
  describe('updateNew', () => {
    it('it must updated the state of the new to false, return an Array of type New', async () => {
      jest.spyOn(newService, 'updateNew').mockImplementation(() =>
      Promise.resolve([{ name: 'example'}] as unknown as Promise<New[]>))

      const updateNew = await controller.updateNew("29977716");

      expect(updateNew).toHaveLength(1)
      expect(newService.updateNew).toHaveBeenCalledTimes(1);
      expect(Array.isArray(updateNew)).toBe(true);

    })
  })
});
