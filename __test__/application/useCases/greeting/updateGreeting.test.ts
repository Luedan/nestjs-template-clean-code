import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { GreetingRepositoryInterface } from '@domain/interfaces/infrastructure/persistence/repository/greeting/greetingRepositoryInterface';
import { UpdateGreeting } from '@application/useCases/greeting/updateGreeting';
import { createMock } from '@golevelup/ts-jest';
import { FakeGreetingDto } from '../../../mocks/data/greeting.dummies';

describe('UpdateGreeting', () => {
  let updateGreeting: UpdateGreeting;
  let greetingRepositoryMock: GreetingRepositoryInterface;
  const mapperMock: Mapper = createMock<Mapper>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateGreeting,
        {
          provide: 'GreetingRepository',
          useValue: {
            findOne: jest.fn(),
            update: jest.fn(),
          },
        },
        {
          provide: 'automapper:nestjs:default',
          useValue: mapperMock,
        },
      ],
    }).compile();

    updateGreeting = module.get<UpdateGreeting>(UpdateGreeting);
    greetingRepositoryMock =
      module.get<GreetingRepositoryInterface>('GreetingRepository');
  });

  describe('handle', () => {
    it('should update the greeting and return the response', async () => {
      // Arrange
      const id = 1;

      greetingRepositoryMock.findOne = jest
        .fn()
        .mockResolvedValue(FakeGreetingDto);
      mapperMock.map = jest.fn().mockReturnValue(FakeGreetingDto);

      // Act
      const result = await updateGreeting.handle(id, FakeGreetingDto);

      // Assert
      expect(greetingRepositoryMock.findOne).toHaveBeenCalledWith({
        where: { id },
      });
      expect(greetingRepositoryMock.update).toHaveBeenCalledWith(
        id,
        expect.any(Object),
      );
      expect(mapperMock.map).toHaveBeenCalledWith(
        FakeGreetingDto,
        expect.anything(),
        GreetingResponseDto,
      );
      expect(result).toEqual(FakeGreetingDto);
    });

    it('should throw NotFoundException if greeting does not exist', async () => {
      const id = 1;

      greetingRepositoryMock.findOne = jest.fn().mockResolvedValue(null);

      await expect(updateGreeting.handle(id, FakeGreetingDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
