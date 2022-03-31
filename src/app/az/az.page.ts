import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-az',
  templateUrl: './az.page.html',
  styleUrls: ['./az.page.scss'],
})
export class AzPage implements OnInit {
  showSkip = true;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) { this.menuCtrl.enable(true, 'main-menu'); }

  ngOnInit() {
  }

}
