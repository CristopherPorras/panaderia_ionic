import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab2Page {
  productos: any[] = []; // Ensure productos is always initialized

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productosService.obtenerProductos().subscribe({
      next: (data) => {
        console.log('Productos obtenidos:', data); // Log the fetched data
        this.productos = Array.isArray(data.productos) ? data.productos : [];
      },
      error: (err) => {
        console.error('Error al obtener productos:', err); // Log any errors
        this.productos = []; // Reset to an empty array on error
      },
    });
  }
}
