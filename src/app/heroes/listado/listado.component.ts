import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['IroMan','Spiderman','Hulk','Thor'];
  heroeBorrado:string='';
  BorrarHeroe(){
    this.heroeBorrado=this.heroes.shift() || '';
    
  }
}
