import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';

/**
 * Configures the MapperInjection module.
 * @remarks
 * This module initializes the strategy for mapping classes.
 */
export const MapperInjection = AutomapperModule.forRoot({
  strategyInitializer: classes(),
});
