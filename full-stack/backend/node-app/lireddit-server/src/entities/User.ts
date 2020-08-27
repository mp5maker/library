import { ObjectType, Field } from 'type-graphql'
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from 'typeorm';
import { Post } from './Post';

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({ unique: true })
    username!: string;

    @Field()
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => Post, post => post.creator)
    posts: Post[]

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date()

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date()

}