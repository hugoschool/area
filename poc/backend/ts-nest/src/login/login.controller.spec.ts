import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller.js';

describe('LoginController', () => {
  let controller: LoginController;
  let config: { get: ReturnType<typeof vi.fn> };
  let jwt: { signAsync: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    config = { get: vi.fn() };
    jwt = { signAsync: vi.fn() };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        { provide: JwtService, useValue: jwt },
        { provide: ConfigService, useValue: config },
      ],
    }).compile();

    controller = module.get<LoginController>(LoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('returns a token when JWT_SECRET is configured', async () => {
    config.get.mockReturnValue('test-secret');
    jwt.signAsync.mockResolvedValue('signed.jwt.token');

    await expect(controller.login()).resolves.toEqual({ token: 'signed.jwt.token' });
  });

  it('throws a 500 when JWT_SECRET is missing', async () => {
    config.get.mockReturnValue(undefined);

    await expect(controller.login()).rejects.toMatchObject({
      status: 500,
      response: {
        statusCode: 500,
        message: 'JWT_SECRET is not configured',
        error: 'Internal Server Error',
      },
    });
    expect(jwt.signAsync).not.toHaveBeenCalled();
  });
});
