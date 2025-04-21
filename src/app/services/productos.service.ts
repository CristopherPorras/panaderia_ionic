import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//  Como productos.ts está en la MISMA carpeta, solo se usa './'
import { productos } from './productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private options;
  private url = 'http://127.0.0.1:5000/api/productos'; // Ensure this URL is correct

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.options = { headers: headers };
  }

  //  Este método trae todos los productos desde el backend
  obtenerProductos(): Observable<any> {
    console.log('Fetching products from:', this.url); // Log the API URL
    return this.http.get<any>(this.url); // Ensure the response type is correct
  }

  //  Este método envía un producto al backend usando POST
  guardarProductos(producto: productos): Observable<any> {
    let productoJson = JSON.stringify({
      ...producto,
      categoria_id: producto.categoria //  mapeo necesario si el backend espera "categoria_id"
    });
    return this.http.post(this.url, productoJson, this.options);
  }
}
