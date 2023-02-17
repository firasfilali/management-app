import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListAnnoncesService } from '../services/list-annonces.service';

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.page.html',
  styleUrls: ['./mes-annonces.page.scss'],
})
export class MesAnnoncesPage implements OnInit {

tab = [];
  constructor(private mesAnnonceList : ListAnnoncesService,
    private alertCtrl : AlertController,
    private router : Router) { }

  ngOnInit() {
    this.tab = this.mesAnnonceList.getAnnonceByUser(2);
  }

  
  async showAlert(id) {
    
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Do you want to delete this annonce ?',
      buttons: [
     
        {
          text: 'Oui',
          handler: () => {
            this.mesAnnonceList.deleteAnnonce(id);
            this.router.navigateByUrl('/annonces');
            
          },
        },
        {
          text: 'Non',
          role: 'cancel',
        }
      ],
    });

    await alert.present();
    
  }

}
