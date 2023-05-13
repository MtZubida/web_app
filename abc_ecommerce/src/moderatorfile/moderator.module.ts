import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ModeratorEntity } from "./moderator.entity";



@Module({
imports: [TypeOrmModule.forFeature([ModeratorEntity])],
controllers: [],
providers: [],

})

export class ModeratorModule {}