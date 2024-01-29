import { Mapper, createMap } from '@automapper/core';
import { AbstractConverter } from '@domain/interfaces/application/mapper/abstractConverter';

/**
 * Converts between entity and DTO objects using a mapper.
 * @template E - The type of the entity object.
 * @template D - The type of the DTO object.
 */
export class GenericConverter<E, D> implements AbstractConverter<E, D> {
  /**
   * Creates an instance of Converter.
   * @param _mapper - The mapper used for object conversion.
   * @param _entity - The constructor function for the entity object.
   * @param _dto - The constructor function for the DTO object.
   */
  constructor(
    private readonly _mapper: Mapper,
    private readonly _entity: new () => E,
    private readonly _dto: new () => D,
  ) {
    createMap(this._mapper, this._entity, this._dto);
    createMap(this._mapper, this._dto, this._entity);
  }

  /**
   * Converts a DTO object to an entity object.
   * @param dto - The DTO object to convert.
   * @returns The converted entity object.
   */
  toEntity(dto: D): E {
    return this._mapper.map(dto, this._dto, this._entity);
  }

  /**
   * Converts an array of DTO objects to an array of entity objects.
   * @param dto - The array of DTO objects to convert.
   * @returns The converted array of entity objects.
   */
  toArrayEntity(dto: D[]): E[] {
    return this._mapper.mapArray(dto, this._dto, this._entity);
  }

  /**
   * Converts an entity object to a DTO object.
   * @param entity - The entity object to convert.
   * @returns The converted DTO object.
   */
  toDto(entity: E): D {
    return this._mapper.map(entity, this._entity, this._dto);
  }

  /**
   * Converts an array of entity objects to an array of DTO objects.
   * @param entity - The array of entity objects to convert.
   * @returns The converted array of DTO objects.
   */
  toArrayDto(entity: E[]): D[] {
    return this._mapper.mapArray(entity, this._entity, this._dto);
  }
}
