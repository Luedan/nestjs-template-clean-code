/**
 * Abstract class representing a converter between entity and DTO.
 * @template E The entity type.
 * @template D The DTO type.
 */
export abstract class AbstractConverter<E, D> {
  /**
   * Converts a DTO to an entity.
   * @param dto The DTO to be converted.
   * @returns The converted entity.
   */
  abstract toEntity(dto: D): E;

  /**
   * Converts an array of DTOs to an array of entities.
   * @param dto The array of DTOs to be converted.
   * @returns The converted array of entities.
   */
  abstract toArrayEntity(dto: D[]): E[];

  /**
   * Converts an entity to a DTO.
   * @param entity The entity to be converted.
   * @returns The converted DTO.
   */
  abstract toDto(entity: E): D;

  /**
   * Converts an array of entities to an array of DTOs.
   * @param entity The array of entities to be converted.
   * @returns The converted array of DTOs.
   */
  abstract toArrayDto(entity: E[]): D[];
}
