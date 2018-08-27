export class Noticia {

  private _titulo: string;
  private _texto_resumen: string;
  private _imagen_resumen: string;
  private _texto_completo: string;
  private _imagen_completo: string;
  private _id: string;

  constructor(titulo: string, texto_resumen: string, imagen_resumen: string, texto_completo: string, imagen_completo: string, id: string) {
    this._titulo = titulo;
    this._texto_resumen = texto_resumen;
    this._imagen_resumen = imagen_resumen;
    this._texto_completo = texto_completo;
    this._imagen_completo = imagen_completo;
    this._id = id;
  }


  get titulo(): string {
    return this._titulo;
  }

  get texto_resumen(): string {
    return this._texto_resumen;
  }

  get imagen_resumen(): string {
    return this._imagen_resumen;
  }

  get texto_completo(): string {
    return this._texto_completo;
  }

  get imagen_completo(): string {
    return this._imagen_completo;
  }

  get id(): string {
    return this._id;
  }
}
