import { Controller, Header, HttpCode, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('ping')
export class PingController {
    @HttpCode(200)
    @Get()
    @Header('Content-Type', 'text/plain')
    @ApiOkResponse({
        description: 'Service is alive',
        content: { 'text/plain': { example: 'ok' } },
    })
    getping(): string {
        return "ok"
    }
}
