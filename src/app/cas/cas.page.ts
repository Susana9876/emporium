import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ContratistaService } from '../servicios/contratista/contratista.service';
import { SupervisorService } from '../servicios/supervisor/supervisor.service';

@Component({
  selector: 'app-cas',
  templateUrl: './cas.page.html',
  styleUrls: ['./cas.page.scss'],
})
export class CasPage implements OnInit {
  showSkip = true;

  valoresCas: any = {
    IdFormato: '',
    IdContratista: '',
    IdSupervisor: '',
    IdResidente: '',
    Madera: '',
    Desmoldante: '',
    Apoyo: '',
    NivelacionCimbra: '',
    Plomo: '',
    DesplantePb: '',
    JunteoBlockPb: '',
    Escalerilla3raPb: '',
    Escalerilla6taPb: '',
    Escalerilla9naPb: '',
    Escalerilla11vaPb: '',
    ConcretoPremezclado: '',
    fcConcreto: '',
    Revenimiento: '',
    Cilindro7dias: '',
    Cilindro14dias: '',
    Cilindro28dias: '',
    BajadasPluviales: '',
    RamaleosHidraulicos: '',
    RamaleosElectricos: '',
    PreparacionAireAcondicionado: '',
    Trazo: '',
    NivelacionEscalera: '',
    Cimbra: '',
    Armado: '',
    Concreto: '',
    Colado: '',
    TipoCastillo: '',
    TipoCerramiento: '',
    Varillas: '',
    Estribos: '',
    Refuerzos: '',
    Traslapes: '',
    Dobleces: '',
    Amarres: '',
    Anclajes: '',
    Calzado: '',
    Bayoneteo: '',
    Vibrado: '',
    Recubrimiento: '',
    Curado: '',
    DesplantePa: '',
    JunteoBlockPa: '',
    Escalerilla3raPa: '',
    Escalerilla6taPa: '',
    Escalerilla9naPa: '',
    Escalerilla11vaPa: '',
    DesplantePre: '',
    JunteoBlockPre: '',
    Escalerilla3raPre: '',
    Escalerilla6taPre: '',
    Escalerilla9naPre: '',
    Escalerilla11vaPre: ''
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
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private contratistaService: ContratistaService,
    private supervisorService: SupervisorService
  ) { this.menuCtrl.enable(true, 'main-menu'); }

  ngOnInit() {
    this.getContratistas();
    this.getSupervisores();
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

  verDatos(){
    console.log(this.valoresCas);
  }
}
