import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

dotenv.config()
const mongoDBURI = `mongodb+srv://photonkhan:${process.env.password}@cluster0-mc0jf.mongodb.net/test?retryWrites=true&w=majority`
const mongoDBOptions = { useUnifiedTopology: true, useNewUrlParser: true }
@Module({
  imports: [MongooseModule.forRoot(mongoDBURI, mongoDBOptions ), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
