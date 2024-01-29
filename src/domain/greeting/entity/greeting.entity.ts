import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

/**
 * Represents the entity data for the Greeting.
 */
@Entity({
  name: 'greetings',
  schema: 'public',
})
export class Greeting {
  /**
   * The identifier of the greeting.
   */
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The greeting message.
   */
  @AutoMap()
  @Column()
  greeting: string;

  /**
   * The state of the greeting.
   */
  @AutoMap()
  @Column({ default: 1 })
  state: number;

  /**
   * The date the greeting was created.
   */
  @AutoMap()
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  /**
   * The date the greeting was updated.
   */
  @AutoMap()
  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  /**
   * The date the greeting was deleted.
   */
  @AutoMap()
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
