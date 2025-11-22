export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public originalError?: unknown,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}
