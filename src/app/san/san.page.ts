import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-san',
  templateUrl: './san.page.html',
  styleUrls: ['./san.page.scss'],
})
export class SanPage implements OnInit {
  showSkip = true;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) { this.menuCtrl.enable(true, 'main-menu'); }

  ngOnInit() {
  }

}
