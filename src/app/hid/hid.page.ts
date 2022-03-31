import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hid',
  templateUrl: './hid.page.html',
  styleUrls: ['./hid.page.scss'],
})
export class HidPage implements OnInit {

  showSkip = true;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) { this.menuCtrl.enable(true, 'main-menu'); }

  ngOnInit() {
  }

}
