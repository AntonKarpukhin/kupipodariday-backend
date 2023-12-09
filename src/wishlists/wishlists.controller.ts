import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Wishlist } from './entities/wishlist.entity';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<Wishlist[]> {
    return this.wishlistsService.findAllWishes();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createWishlistDto: CreateWishlistDto,
    @Req() req,
  ): Promise<Wishlist> {
    return this.wishlistsService.createWishes(createWishlistDto, req.user);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: number): Promise<Wishlist> {
    return this.wishlistsService.findOneWishes(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Body() updateWishlistDto: UpdateWishlistDto,
    @Param('id') id: number,
    @Req() req,
  ): Promise<Wishlist> {
    return this.wishlistsService.updateOneWishes(
      id,
      updateWishlistDto,
      req.user,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: number, @Req() req): Promise<Wishlist> {
    return this.wishlistsService.removeWishes(id, req.user);
  }
}
