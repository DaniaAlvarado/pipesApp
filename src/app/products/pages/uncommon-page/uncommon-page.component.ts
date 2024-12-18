import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Daniela';
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name ='Carlos';
    this.gender = 'male';
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia']
  public clientsMap ={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void{
    this.clients.shift();
  }

  // keyValue pipe
  public person = {
    name: 'Daniela',
    age: 36,
    address: 'Medellin, Colombia'
  }

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) =>{
    setTimeout( () =>{
      resolve(' tenemos data en la promesa');
      console.log(' tenemos data en la promesa')
    }, 3500);
  })
}
