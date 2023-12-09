import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
export class Wish extends BaseEntity {
  @Column()
  name: string;

  @Column()
  link: string;

  @Column()
  image: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  raised: number;

  @Column()
  description: string;

  @Column({ default: 0 })
  copied: number;

  @ManyToOne(() => User, (user) => user.wishes)
  @JoinColumn({ name: 'user_id' })
  owner: User;

  @OneToMany(() => Offer, (offer) => offer.item)
  offers: Offer[];

  @ManyToMany(() => Wishlist, (wishlist) => wishlist.items)
  wishlists: Wishlist[];
}
