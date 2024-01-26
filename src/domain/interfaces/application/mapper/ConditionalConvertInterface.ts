/**
 * Represents an interface for conditional conversion between two types.
 * @template E The type of the entity.
 * @template D The type of the DTO.
 */
export interface ConditionalConvertInterface<E, D> {
  /**
   * Converts the given DTO or array of DTOs to the corresponding entity or array of entities.
   * @param data The DTO or array of DTOs to convert.
   * @returns The corresponding entity or array of entities.
   */
  fromDto(data: D | D[]): E | E[];

  /**
   * Converts the given entity or array of entities to the corresponding DTO or array of DTOs.
   * @param data The entity or array of entities to convert.
   * @returns The corresponding DTO or array of DTOs.
   */
  fromEntity(data: E | E[]): D | D[];
}
