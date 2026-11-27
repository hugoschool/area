import { Module } from '@nestjs/common';
import { AppService } from './app.service.js';
import { PingController } from './ping/ping.controller.js';
import { LoginController } from './login/login.controller.js';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_SECRET"),
        signOptions: {expiresIn: "1h"},
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [PingController, LoginController],
  providers: [AppService],
})
export class AppModule {}
