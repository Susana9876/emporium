import { Component } from '@angular/core';
import { LoginPage } from './login/login.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = LoginPage;
  public appPages = [
    { title: 'Trazo', url: 'trazo', icon: 'pencil' },
    { title: 'Sanitaria', url: 'san', icon: 'sparkles' },
    { title: 'Hidráulica', url: 'hid', icon: 'water' },
    { title: 'Cimentación', url: 'cim', icon: 'hammer' },
    { title: 'Muros y Castillos', url: 'cas', icon: 'business' },
    { title: 'Losa de Entrepiso', url: 'ent', icon: 'build' },
    { title: 'Losa de Azotea', url: 'az', icon: 'cloud' },
    { title: 'Enladrillado', url: 'enla', icon: 'checkmark' },
    { title: 'Pruebas de calidad', url: 'prc', icon: 'star' },
    { title: 'VF', url: 'vf', icon: 'flash' },
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/
  constructor(
  ) {}

}
