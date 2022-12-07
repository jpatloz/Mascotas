import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/modelo/mascotas';
import { MascotasService } from '../../modelo/mascotas.service';

@Component({
  selector: 'app-detalle-mascotas',
  templateUrl: './detalle-mascotas.component.html',
  styleUrls: ['./detalle-mascotas.component.css']
})
export class DetalleMascotasComponent {
  mascota?: Mascota;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotasService
  ) {}

  getmascota() {
    this.mascotaService.getMascota(this.route.snapshot.paramMap.get("documentId")!.toString())
  }

  ngOnInit(): void {this.getmascota()}
}

