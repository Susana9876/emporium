import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vf',
  templateUrl: './vf.page.html',
  styleUrls: ['./vf.page.scss'],
})
export class VfPage implements OnInit {
  showSkip = true;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) { this.menuCtrl.enable(true, 'main-menu'); }

  ngOnInit() {
  }

}
