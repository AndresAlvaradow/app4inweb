import { Component } from '@angular/core';

@Component({
	selector: 'mi-componente',
	templateUrl: './mi-componente.component.html'
})

export class MiComponente{
	public titulo: string;
	public comentario: string;
	public telefono: string;
	constructor(){
		this.titulo="Hola componente";
		this.comentario="Este es comentario";
		this.telefono="0986560003";
	}
}