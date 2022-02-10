import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Trazo', url: 'trazo', icon: 'pencil' },
    { title: 'Sanitaria', url: 'san', icon: 'funnel' },
    { title: 'Hidráulica', url: 'hid', icon: 'trending-up' },
    { title: 'Cimentación', url: 'cim', icon: 'leaf' },
    { title: 'Castillos', url: 'cas', icon: 'cog' },
    { title: 'Entrepiso', url: 'ent', icon: 'hammer' },
    { title: 'Azotea', url: 'az', icon: 'magnet' },
    { title: 'Impermeabilización', url: 'imper', icon: 'checkmark-circle' },
    { title: 'Eléctrica', url: 'elec', icon: 'flash' },
    { title: 'Terminación', url: 'terminacion', icon: 'home' },
    { title: 'Vivienda terminada', url: 'vf', icon: 'happy' },
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/
  constructor() {}
}
