import { Module } from '@nestjs/common';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from './../pokemon/pokemon.module';
import { CommonModule } from './../common/common.module';
import { IHttpAdapter } from './../common/interfaces/http-adapter.interface';
import { AxiosAdapter } from './../common/adapters/axios.adapter';

@Module({
  controllers: [SeedController],
  providers: [SeedService, { provide: IHttpAdapter, useClass: AxiosAdapter }],
  imports: [
    PokemonModule,
    CommonModule
  ]
})
export class SeedModule {}
