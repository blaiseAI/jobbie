import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';

@Module({
  imports: [HttpModule],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
