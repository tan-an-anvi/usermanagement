import {
  Entity, PrimaryGeneratedColumn, Column, ManyToMany
} from 'typeorm';
import { User } from './User';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // e.g., "admin", "manager", "user"

  @ManyToMany(() => User, user => user.roles)
  users: User[];
}