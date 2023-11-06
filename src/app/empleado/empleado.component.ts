import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  //nombre="Diego"
  apellido="de la Prada";
  private edad=20;

  habilitarCuadro=false;
  usuarioRegistrado=true;
  textoRegistro="No hay nadie registrado"

  getRegistroUsuario(){
    this.usuarioRegistrado=false
  }

  usuRegistrado(evento:Event){
    //alert(evento.target);//object HTMLInputElement

    this.textoRegistro ="El usuario a sido registrado";


    if((<HTMLInputElement>evento.target).value=="si")
      this.textoRegistro ="El usuario a sido registrado";    
    else    
      this.textoRegistro ="No hay nadie registrado";
    
  }

  getEdad(){
    return this.edad;
  }

  llamaEmpresa(value:string){

  }
}
