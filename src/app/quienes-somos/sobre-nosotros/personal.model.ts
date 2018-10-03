export class Personal {
  private _nombre: string;
  private _apellido: string;
  private _titulo: string;
  private _universidad: string;
  private _cargo:string;
  private _descripcion: string;
  private _foto: string;


  constructor(nombre: string, apellido: string, titulo: string, universidad: string, cargo, descripcion: string, foto: string) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._titulo = titulo;
    this._universidad = universidad;
    this._cargo = cargo;
    this._descripcion = descripcion;
    this._foto = foto;
  }

  get nombre(): string {
    return this._nombre;
  }

  get apellido(): string {
    return this._apellido;
  }

  get titulo(): string {
    return this._titulo;
  }

  get universidad(): string {
    return this._universidad;
  }

  get cargo() {
    return this._cargo;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  get foto(): string {
    return this._foto;
  }
}
