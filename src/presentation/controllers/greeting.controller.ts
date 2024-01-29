import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { GetHelloForInterface } from '@domain/interfaces/application/useCases/greeting/getHelloForInterface';
import { GetHelloInterface } from '@domain/interfaces/application/useCases/greeting/getHelloInterface';
import { CreateGreetingInterface } from '@domain/interfaces/application/useCases/greeting/createGreetingInterface';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';

/**
 * @class
 * @public
 * @name GreetingController
 * @description This class is the controller of the application
 */
@ApiTags('Greeting')
@Controller('/greeting')
export class GreetingController {
  /**
   * @constructor
   * @param _getHello
   * @param _getHelloFor
   * @param _createGreeting
   */
  constructor(
    @Inject('GetHello')
    private readonly _getHello: GetHelloInterface,
    @Inject('GetHelloFor')
    private readonly _getHelloFor: GetHelloForInterface,
    @Inject('CreateGreeting')
    private readonly _createGreeting: CreateGreetingInterface,
  ) {}

  /**
   * @description This method return a string
   * @returns {string}
   */
  @Get('/')
  getHello(): Promise<GreetingResponseDto> {
    return this._getHello.handle();
  }

  /**
   * @description This method return a string whit a name
   * @returns {string}
   */
  @Get(':name')
  @ApiParam({ name: 'name', type: String, description: 'Nombre de la persona' })
  getHelloFor(@Param('name') name: string): Promise<GreetingResponseDto> {
    return this._getHelloFor.handle(name);
  }

  /**
   * Creates a greeting.
   * @param req - The greeting request object.
   * @returns A promise that resolves to the greeting response object.
   */
  @Post('/')
  createGreeting(
    @Body() body: GreetingRequestDto,
  ): Promise<GreetingResponseDto> {
    return this._createGreeting.handle(body);
  }
}
