import { Controller, HttpCode, InternalServerErrorException, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
    ApiBody,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';

@Controller('login')
export class LoginController {
    constructor(
        private readonly jwtService: JwtService,
        private readonly config: ConfigService,
    ) {}
    @HttpCode(200)
    @Post()
    @ApiOperation({ summary: 'Generate a JWT' })
    @ApiOkResponse({
        description: 'Signed JWT',
        content: {
            'application/json': {
                example: {
                    token: 'string',
                },
            },
        },
    })
    @ApiInternalServerErrorResponse({
        description: 'JWT_SECRET is not configured',
        content: {
            'application/json': {
                example: {
                    statusCode: 500,
                    message: 'JWT_SECRET is not configured',
                    error: 'Internal Server Error',
                },
            },
        },
    })
    async login() {
        if (!this.config.get<string>('JWT_SECRET')) {
            throw new InternalServerErrorException('JWT_SECRET is not configured');
        }
        const token = await this.jwtService.signAsync({
            time: Math.floor(Date.now() / 1000),
        });
        return { token };
    }
}
