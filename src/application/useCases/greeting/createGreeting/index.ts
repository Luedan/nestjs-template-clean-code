import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Inject, Injectable } from '@nestjs/common';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { CreateGreetingInterface } from '@domain/interfaces/application/useCases/greeting/createGreetingInterface';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';
import { GreetingRepositoryInterface } from '@domain/interfaces/infrastructure/persistence/repository/greeting/greetingRepositoryInterface';

/**
 * @export CreateGreeting
 * @class CreateGreeting
 * @implements {CreateGreetingInterface}
 */
@Injectable()
export class CreateGreeting implements CreateGreetingInterface {
  /**
   * Creates an instance of CreateGreeting.
   * @param {Mapper} _mapper
   * @memberof CreateGreeting
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    @Inject('GreetingRepository')
    private readonly _greetingRepository: GreetingRepositoryInterface,
  ) {}

  /**
   * @return {string}
   * @memberof CreateGreeting
   * @method handle
   * @description This method returns a string.
   */
  async handle(payload: GreetingRequestDto): Promise<GreetingResponseDto> {
    try {
      const newPayload = this._mapper.map(
        payload,
        GreetingRequestDto,
        Greeting,
      );

      const data = await this._greetingRepository.create(newPayload);
      const response = this._mapper.map(data, Greeting, GreetingResponseDto);
      return response;
    } catch (error) {}
  }
}
