/**
 * Represents a mapper interface for converting arrays between two types.
 * @template E The type of the entity.
 * @template D The type of the DTO.
 */
export interface ConvertArrayInterface<E, D> {
  /**
   * Converts an array of DTOs to an array of entities.
   * @param data The array of DTOs.
   * @returns An array of entities.
   */
  fromDto(data: D[]): E[];

  /**
   * Converts an array of entities to an array of DTOs.
   * @param data The array of entities.
   * @returns An array of DTOs.
   */
  fromEntity(data: E[]): D[];
}
