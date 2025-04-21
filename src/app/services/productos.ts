export class productos {
  descripcion: string;
  valor_unitario: number;
  unidad_medida: string;
  cantidad_stock: number;
  categoria: string;
  imagen: string;

  constructor() {
    this.descripcion = '';
    this.valor_unitario = 0;
    this.unidad_medida = '';
    this.cantidad_stock = 0;
    this.categoria = '';
    this.imagen = ''; // Initialize default value
  }
}
