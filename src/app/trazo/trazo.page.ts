import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { TrazoService } from '../servicios/trazo/trazo.service';
import { AlertController } from '@ionic/angular'; 
import { FormGroup } from '@angular/forms';
import { ContratistaService } from '../servicios/contratista/contratista.service';
import { SupervisorService } from '../servicios/supervisor/supervisor.service';
import { CodigoQRService } from '../servicios/codigoQR/codigo-qr.service';


@Component({
  selector: 'app-trazo',
  templateUrl: './trazo.page.html',
  styleUrls: ['./trazo.page.scss'],
})
export class TrazoPage implements OnInit {
  form: FormGroup;
  cucumber: boolean;
  showSkip = true;
  //PuntosManzaneros: number = 0;
  valoresTrazo: any ={
    IdFormato: '',
    IdContratista: '',
    IdSupervisor: '',
    IdResidente: '',
    PuntosManzaneros: '',
    Lotificacion: '',
    PuntosRadio: '',
    Escuadras: '',
    PuntosControl: '',
    NivelesPlataforma: '',
    NivelGuarnicion: '',
    TomasDomicilarias: '',
    DescargasSanitarias: '',
    AcometidasElectricas: '',
    GasNatural: ''
  }

  prototipoInfo: any = [
    {
      ClaveUbicacion: '',
      ManzanaLote: '',
      Modelo: ''
    }
  ]

  contratistas: any = [
    {
      Id: null,
      Clave: null,
      Nombre: ''
    }

  ]
  

  supervisores: any = [
    {
      Id: null,
      Nombre: '',
      idnivel: null,
      Nivel: ''
    }
  ]

  selectContratista: string = '';
  selectSupervisor: string = '';

    constructor(
      private codigoQRService: CodigoQRService,
    private trazoService: TrazoService,
    private alertCtlr: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private contratistaService: ContratistaService,
    private supervisorService: SupervisorService
    
  ) { 
    this.menuCtrl.enable(true, 'main-menu'); 
    
  }

  ngOnInit() {
    this.getContratistas();
    this.getSupervisores();
  }
  
  guardar():void{
    this.trazoService.postTrazo(this.valoresTrazo.value).subscribe(() => {
      console.log('se guardaron los datos');
    }, error => console.error(error));
  }


  verDatos(){
    console.log(this.valoresTrazo);
  }

  getContratistas(){
    this.contratistaService.getContratista().subscribe((value) =>{
      this.contratistas = value;
    })
  }

  getProto(){
    this.codigoQRService.getInfoProto().subscribe((value) =>{
      this.prototipoInfo = value;
    })
  }

  getSupervisores(){
    this.supervisorService.getSupervisor().subscribe((value) => {
      this.supervisores = value;
    })
  }

  

  
}
