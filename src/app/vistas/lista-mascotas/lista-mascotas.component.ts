import { Component } from '@angular/core';
import { MascotasService } from '../../modelo/mascotas.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent {

  mascota: any[] = [];

  constructor(private mascotaService: MascotasService) { }

  ngOnInit(): void {
  }

  getAll(){
    this.mascotaService.getAll().subscribe((mascotaSnapshot: any) =>{
      this.mascota = [];
      mascotaSnapshot.forEach((mascotaData:any) =>{
        console.log(mascotaData);
        this.mascota.push({
          id: mascotaData.payload.doc.id,
          data: mascotaData.payload.doc.data()
        })
      })

      });
    }

}
