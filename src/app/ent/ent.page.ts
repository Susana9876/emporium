import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ent',
  templateUrl: './ent.page.html',
  styleUrls: ['./ent.page.scss'],
})
export class EntPage implements OnInit {

  showSkip = true;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) { this.menuCtrl.enable(true, 'main-menu'); }

  ngOnInit() {
  }

}
