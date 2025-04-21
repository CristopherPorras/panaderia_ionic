import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ProductosService } from '../services/productos.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

    constructor(private fb: FormBuilder,
     private porductosService: ProductosService,
     private alertController: AlertController) { }
  // 🟠 Formulario reactivo para crear un nuevo producto
  form: any;

     ngOnInit(){
       this.crearFormulario();
  }
  crearFormulario() {
    this.form = this.fb.group({
      descripcion: [''],
      valor_unitario: [''],
     unidad_medida: [''],
      cantidad_stock: [''],
      categoria: [''],
     imagen: ['']
    });
  }

  guardarProducto() {
    if (this.form.valid) {
      this.porductosService.guardarProductos(this.form.value).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Producto guardado correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.form.reset();
        },
        error: async () => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Hubo un problema al guardar el producto.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    } else {
      this.alertController.create({
        header: 'Formulario inválido',
        message: 'Por favor, complete todos los campos requeridos.',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
  }
}
