import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.refreshTokens)
  user: User;

  @Column()
  jwtId: string;

  @Column({ default: false })
  used: boolean;

  @Column({ default: false })
  invalidated: boolean;

  @Column()
  expiryDate: Date;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updateData: Date;
}
