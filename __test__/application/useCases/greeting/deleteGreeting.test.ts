import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { GreetingRepositoryInterface } from '@domain/interfaces/infrastructure/persistence/repository/greeting/greetingRepositoryInterface';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Mapper } from '@automapper/core';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { DeleteGreeting } from '@application/useCases/greeting/deleteGreeting';

describe('DeleteGreeting', () => {
  let deleteGreeting: DeleteGreeting;
  let greetingRepositoryMock: GreetingRepositoryInterface;
  let mapperMock: Mapper;

  beforeEach(async () => {
    greetingRepositoryMock = {
      findOne: jest.fn(),
      delete: jest.fn(),
    } as unknown as GreetingRepositoryInterface;

    mapperMock = {
      map: jest.fn(),
    } as unknown as Mapper;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteGreeting,
        {
          provide: 'GreetingRepository',
          useValue: greetingRepositoryMock,
        },
        {
          provide: 'automapper:nestjs:default',
          useValue: mapperMock,
        },
      ],
    }).compile();

    deleteGreeting = module.get<DeleteGreeting>(DeleteGreeting);
  });

  it('should be defined', () => {
    expect(deleteGreeting).toBeDefined();
  });

  describe('handle', () => {
    it('should delete the greeting and return the response DTO', async () => {
      const id = 1;
      const greetingEntityMock = {} as Greeting;
      const greetingResponseDtoMock = {} as GreetingResponseDto;

      greetingRepositoryMock.findOne = jest
        .fn()
        .mockResolvedValue(greetingEntityMock);
      mapperMock.map = jest.fn().mockReturnValue(greetingResponseDtoMock);

      const result = await deleteGreeting.handle(id);

      expect(greetingRepositoryMock.findOne).toHaveBeenCalledWith({
        where: { id },
      });
      expect(greetingRepositoryMock.delete).toHaveBeenCalledWith(id);
      expect(mapperMock.map).toHaveBeenCalledWith(
        greetingEntityMock,
        Greeting,
        GreetingResponseDto,
      );
      expect(result).toEqual(greetingResponseDtoMock);
    });

    it('should throw NotFoundException if the greeting with the specified ID does not exist', async () => {
      const id = 1;

      greetingRepositoryMock.findOne = jest.fn().mockResolvedValue(null);

      await expect(deleteGreeting.handle(id)).rejects.toThrow(
        NotFoundException,
      );

      expect(greetingRepositoryMock.findOne).toHaveBeenCalledWith({
        where: { id },
      });
      expect(greetingRepositoryMock.delete).not.toHaveBeenCalled();
      expect(mapperMock.map).not.toHaveBeenCalled();
    });

    it('should rethrow an error if an unexpected error occurs during the deletion process', async () => {
      const id = 1;
      const unexpectedError = new Error('Unexpected error');

      greetingRepositoryMock.findOne = jest
        .fn()
        .mockRejectedValue(unexpectedError);

      await expect(deleteGreeting.handle(id)).rejects.toThrow(unexpectedError);

      expect(greetingRepositoryMock.findOne).toHaveBeenCalledWith({
        where: { id },
      });
      expect(greetingRepositoryMock.delete).not.toHaveBeenCalled();
      expect(mapperMock.map).not.toHaveBeenCalled();
    });
  });
});
