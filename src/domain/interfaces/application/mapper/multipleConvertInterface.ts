/**
 * Represents an interface for mapping between DTOs (Data Transfer Objects) and entities.
 * @template E The type of the entity object.
 * @template D The type of the DTO object.
 */
export interface MultipleConvertInterface<E, D> {
  /**
   * Converts a DTO object to an entity object.
   * @param data The DTO object to convert.
   * @returns The converted entity object.
   */
  fromDto(data: D): E;

  /**
   * Converts an entity object to a DTO object.
   * @param data The entity object to convert.
   * @returns The converted DTO object.
   */
  fromEntity(data: E): D;

  /**
   * Converts an array of DTOs to an array of entities.
   * @param data The array of DTOs.
   * @returns An array of entities.
   */
  fromDtoArray(data: D[]): E[];

  /**
   * Converts an array of entities to an array of DTOs.
   * @param data The array of entities.
   * @returns An array of DTOs.
   */
  fromEntityArray(data: E[]): D[];
}
