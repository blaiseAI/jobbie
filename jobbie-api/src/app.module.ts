import { QuotesService } from './quotes/quotes.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [QuotesModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
