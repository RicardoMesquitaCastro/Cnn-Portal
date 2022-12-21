export class GenericResultCommand {

  constructor(
    public error?: boolean,
    public message?: string,
    public data?: any,
  ) { }
}