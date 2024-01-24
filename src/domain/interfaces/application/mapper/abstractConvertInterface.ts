/**
 * Represents an abstract converter interface that defines methods for converting between different types.
 * @template Entity - The type of the entity.
 * @template Request - The type of the request.
 * @template Response - The type of the response.
 */
export interface AbstractConvert<Entity, Request, Response> {
  /**
   * Converts the data from the request type to the entity type.
   * @param data - The data to be converted.
   * @returns The converted entity.
   */
  fromDto(data: Request): Entity;

  /**
   * Converts the data from the entity type to the response type.
   * @param data - The data to be converted.
   * @returns The converted response.
   */
  fromEntity(data: Entity): Response;
}
