import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { HttpResponseException } from '../http/HttpException';

/**
 * Decorator que marca que a classe será um filtro de exceções
 * @decorator `@Catch()`
 */
@Catch()
export class ExceptionFilterHttp implements ExceptionFilter {
  /**
   * Instanciando um logger
   */
  protected logger = new Logger(ExceptionFilterHttp.name);
  /**
   * Instanciando uma classe com métodos HTTP
   */
  private httpAdapter: AbstractHttpAdapter;

  /**
   * Construtor que busca os serviços providos da HttpAdapterHost
   * @param adapterHost define como um objeto HttpAdapterHost que provém métodos get e set do HttpAdapter
   */
  constructor(private readonly adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  /**
   * Função de tratamento de exceções
   * @param exception Parâmetro vindo do decorator '@Catch' para definir as exceções
   * @param host Provém métodos HTTP para verificação dos argumentos
   * @returns
   */
   catch(exception: any, host: ArgumentsHost) {
    const contextHttp = host.switchToHttp();
    const response = contextHttp.getResponse();

    console.log(exception);

    const status = 500;
    const body = {
      statusCode: status,
      data: 'Request not completed',
      error: 'Internal Server Error',
    };

    this.httpAdapter.setHeader(
      response,
      'Content-Type',
      'application/json; charset=uft-8',
    );

    if (exception instanceof BadRequestException) {
      const resolver = exception as any;
      const status = 422;
      const body = {
        statusCode: status,
        data: resolver.getResponse(),
        error: 'Unproccessable Entity',
      };
      delete body.data.statusCode;
      delete body.data.error;
      return this.httpAdapter.reply(response, body, status);
    }

    if (exception instanceof HttpResponseException) {
      const resolver: Core.Error = exception as any;

      const status = resolver.response.status;
      const body = {
        statusCode: status,
        data: resolver.response.data,
        error: resolver.response?.statusText,
      };
      console.log(resolver.response.data);
      if (
        String(resolver.response.headers['content-type']).match(
          new RegExp('html'),
        )
      ) {
        body.data =
          'Request body cannot be processed, content type is not accepted.';
      }

      return this.httpAdapter.reply(response, body, status);
    }

    return this.httpAdapter.reply(response, body, status);
  }
}
