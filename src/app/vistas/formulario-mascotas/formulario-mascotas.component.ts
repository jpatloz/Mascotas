import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../../modelo/mascotas';
import { MascotasService } from '../../modelo/mascotas.service';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-mascotas',
  templateUrl: './formulario-mascotas.component.html',
  styleUrls: ['./formulario-mascotas.component.css']
})
export class FormularioMascotasComponent {

  mascota?: Mascota;
  nuevaMascota = true;

  //Crear el formulario con formBuilder

  mascotasForm!: FormGroup;

  constructor(private formBuilder: FormBuilder/* , productService: ProductService */
  ) {}

  ngOnInit() {
    const currentYear: number = (new Date()).getFullYear();

    // Se deberia obtener el producto mediante un Service(productService)

    /* Construir el FormGroup(productForm), se usa el FormBuilder para facilitar la construccion del formulario(setear valores y validadores) */
    this.mascotasForm = this.formBuilder.group({
      name: [ this.mascota?.nombre, [Validators.required, Validators.minLength(4)] ],
      description: [ this.mascota?.sexo, [Validators.required, Validators.maxLength(50)] ],
      price: [ this.mascota?.raza, [Validators.required, Validators.min(0)] ],
      year: [ this.mascota?.edad, [ Validators.required, Validators.max(20) ]]
    });

  }

  onSubmit() {
    console.log(this.mascotasForm.value);
    // Guardar cambios del producto usando un Service(productService)
  }

  get nombre() {
    return this.mascotasForm.get('nombre');
  }

  get sexo() {
    return this.mascotasForm.get('sexo');
  }

  get raza() {
    return this.mascotasForm.get('raza');
  }

  get edad() {
    return this.mascotasForm.get('edad');
  }
}

