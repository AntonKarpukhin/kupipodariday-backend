import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
export class Offer extends BaseEntity {
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ default: false })
  hidden: boolean;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  item: Wish;

  @ManyToOne(() => User, (user) => user.offers)
  user: User;
}
