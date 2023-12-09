import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
export class Wishlist extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  image: string;

  @ManyToOne(() => User)
  owner: User;

  @ManyToMany(() => Wish)
  @JoinTable()
  items: Wish[];
}
