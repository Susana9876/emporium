import { Component, OnInit } from '@angular/core';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CodigoQRService } from '../servicios/codigoQR/codigo-qr.service';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {
  showSkip = true;
  data: any;

  prototipoInfo: any =
  {
    ClaveUbicacion: '',
    ManzanaLote: '',
    Modelo: ''
  }

  formatoInfo: any =
  {
    Id_Fraccionamiento: ''
  }

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    //private barcodeScanner: BarcodeScanner,
    private codigoQRService: CodigoQRService,
    ) { this.menuCtrl.enable(false, 'main-menu'); }

  ngOnInit() {

    
  }

  Consulta(){
    this.codigoQRService.getInfoForma().subscribe(value => {
      this.formatoInfo = value
    });
    if(this.formatoInfo.value != null){
      this.codigoQRService.getInfoProto().subscribe(value =>{
        this.prototipoInfo = value
        console.log(this.prototipoInfo);
        console.log('no se puede');
      });
    }else{
      this.codigoQRService.postInfo(this.formatoInfo).subscribe(() => {
        console.log('se guardaron los datos');
        this.router.navigate(['/trazo']);
      }, error => console.error(error));
    }
  }
}