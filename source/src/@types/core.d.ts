declare namespace Core {
  interface Response {
    statusText?: string;
    status: number;
    headers: object;
    data: any;
  }

  interface Error {
    response: Response;
  }
}
