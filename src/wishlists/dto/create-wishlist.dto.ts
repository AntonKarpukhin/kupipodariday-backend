import { IsString, IsUrl, Length } from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @Length(1, 250)
  name: string;

  @IsString()
  @Length(0, 1500)
  description: string;

  @IsString()
  @IsUrl()
  image: string;

  itemsId: number[];
}
