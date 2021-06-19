export interface ITechnology {
  tech: string,
  year: string,
  author: string,
  license: string,
  language: string,
  type: string,
  logo: string,
  favorite: boolean
}

export interface IFormCommand {
    execute(): void;
}
