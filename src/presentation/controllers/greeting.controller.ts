import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { GetHelloInterface } from '@domain/interfaces/application/useCases/greeting/getHelloInterface';
import { CreateGreetingInterface } from '@domain/interfaces/application/useCases/greeting/createGreetingInterface';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';
import { GetHelloForInterface } from '@domain/interfaces/application/useCases/greeting/getHelloForInterface';
import { GetAllGreetingInterface } from '@domain/interfaces/application/useCases/greeting/getAllGreetingnterface';
import { GetOneGreetingInterface } from '@domain/interfaces/application/useCases/greeting/getOneGreeting';
import { UpdateGreetingInterface } from '@domain/interfaces/application/useCases/greeting/updateGreetingInterface';
import { deleteGreetingInterface } from '@domain/interfaces/application/useCases/greeting/deleteGreetingInterface';

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
    @Inject('GetAllGreetings')
    private readonly _getAllGreetings: GetAllGreetingInterface,
    @Inject('GetOneGreeting')
    private readonly _getOneGreeting: GetOneGreetingInterface,
    @Inject('UpdateGreeting')
    private readonly _updateGreeting: UpdateGreetingInterface,
    @Inject('DeleteGreeting')
    private readonly _deleteGreeting: deleteGreetingInterface,
  ) {}

  /**
   * @description This method return a string
   * @returns {string}
   */
  @Get('/hello')
  getHello(): Promise<GreetingResponseDto> {
    return this._getHello.handle();
  }

  /**
   * @description This method return a string whit a name
   * @returns {string}
   */
  @Get('/hello/:name')
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

  /**
   * Gets all greetings.
   * @returns A promise that resolves to an array of greeting response objects.
   */
  @Get('/')
  getAllGreetings(): Promise<GreetingResponseDto[]> {
    return this._getAllGreetings.handle();
  }

  /**
   * Gets a greeting by ID.
   * @param id - The ID of the greeting to get.
   * @returns A promise that resolves to the greeting response object.
   */
  @Get('/:id')
  getOneGreeting(@Param('id') id: number): Promise<GreetingResponseDto> {
    return this._getOneGreeting.handle(id);
  }

  /**
   * Updates a greeting.
   * @param id - The ID of the greeting to update.
   * @param req - The greeting request object.
   * @returns A promise that resolves to the greeting response object.
   */
  @Put('/:id')
  updateGreeting(
    @Param('id') id: number,
    @Body() body: GreetingRequestDto,
  ): Promise<GreetingResponseDto> {
    return this._updateGreeting.handle(id, body);
  }

  /**
   * Deletes a greeting.
   * @param id - The ID of the greeting to delete.
   * @returns A promise that resolves to the deleted greeting response object.
   */
  @Delete('/:id')
  deleteGreeting(@Param('id') id: number): Promise<GreetingResponseDto> {
    return this._deleteGreeting.handle(id);
  }
}
