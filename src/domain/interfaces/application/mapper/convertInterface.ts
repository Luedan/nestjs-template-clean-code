/**
 * Represents an abstract converter interface that defines methods for converting between two types.
 * @template E The type of the entity.
 * @template D The type of the DTO.
 */
export interface ConvertInterface<E, D> {
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
}
