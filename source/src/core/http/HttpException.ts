/**
 * Classe para tratamento de erros
 */
export class HttpResponseException extends Error {
  /**
   * Utilizando o type "Core.Response" criado no diretório "@types"
   */
  private response: Core.Response;

  /**
   * Construindo uma response com atributos da classe Error e também do type Core
   * @param response Desestruturando o erro buscando somente sua response
   */
  constructor({ response }: Core.Error) {
    super();
    this.response = response;
  }
}
