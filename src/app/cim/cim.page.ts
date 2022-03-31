import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CimService } from '../servicios/cim/cim.service';
import { ContratistaService } from '../servicios/contratista/contratista.service';
import { SupervisorService } from '../servicios/supervisor/supervisor.service';

@Component({
  selector: 'app-cim',
  templateUrl: './cim.page.html',
  styleUrls: ['./cim.page.scss'],
})
export class CimPage implements OnInit {
  showSkip = true;

  valoresCim: any= {
   IdFormato: '',
   IdContratista: '',
   IdSupervisor: '',
   IdResidente: '',
   SeccionMin: '',
   PendienteMinExcavacion: '',
   PendienteMinInstalacion: '',
   AlimentacionElectrica: '',
   ForjadoRegistros: '',
   MedidasCanas: '',
   TapasProvisionales: '',
   ProfundidadNivel: '',
   ConcretoTirado: '',
   fcConcreto: '',
   Cilindro7dias: '',
   Cilindro14dias: '',
   Cilindro28dias: '',
   Alineacion: '',
   NivelacionCimbra: '',
   Sujecion: '',
   ColocacionHule: '',
   Desmoldante: '',
   UbicacionSalidas: '',
   RevisionConexiones: '',
   DiametrosTuberia: '',
   TipoTuberia: '',
   PruebaHidraulica: '',
   TipoMallaZapata: '',
   TipoMallaFirme: '',
   TrabeCimentacionZapata: '',
   TrabeCimentacionFirme: '',
   VarillasTrabeZapata: '',
   VarillasTrabeFirme: '',
   EstriboTrabeZapata: '',
   EstriboTrabeFirme: '',
   RefuerzoMallaZapata: '',
   RefuerzoMallaFirme: '',
   ArmexCastilloZapata: '',
   ArmexCastilloFirme: '',
   RefuerzoCastilloZapata: '',
   RefuerzoCastilloFirme: '',
   Traslapes: '',
   Dobleces: '',
   Amarres: '',
   Anclajes: '',
   Calzado: '',
   Bayoneteo: '',
   UbicacionCastillo: '',
   ContraventeoBAP: '',
   Vibrado: '',
   Espesor: '',
   NivelacionColado: '',
   Acabado: '',
   Curado: '',
   Geolocalizacion: '',
   Revenimiento: ''
  };
  
  ValoresFormato: any = {
    Fecha: ''
  }

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
    private cimService: CimService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private contratistaService: ContratistaService,
    private supervisorService: SupervisorService
  ) { this.menuCtrl.enable(true, 'main-menu'); }

  ngOnInit() {
    this.getContratistas();
    this.getSupervisores();
  }

  guardar():void{
    this.cimService.postCim(this.valoresCim.value).subscribe(() => {
      console.log('se guardaron los datos');
    }, error => console.error(error));
  }


  verDatos(){
    console.log(this.valoresCim);
  }

  getContratistas(){
    this.contratistaService.getContratista().subscribe((value) =>{
      this.contratistas = value;
    })
  }

  getSupervisores(){
    this.supervisorService.getSupervisor().subscribe((value) => {
      this.supervisores = value;
    })
  }
}
