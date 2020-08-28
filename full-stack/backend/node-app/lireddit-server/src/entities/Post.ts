import { ObjectType, Field } from 'type-graphql'
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Updoot } from './Updoot';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    text!: string;

    @Field()
    @Column({ type: 'int', default: 0 })
    points!: number

    @Field()
    @Column()
    creatorId: number

    @Field()
    @ManyToOne(() => User, user => user.posts)
    creator: User

    @OneToMany(() => Updoot, updoot => updoot.user)
    updoots: Updoot[]

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}