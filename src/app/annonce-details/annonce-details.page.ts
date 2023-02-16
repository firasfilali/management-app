import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListAnnoncesService } from '../services/list-annonces.service';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.page.html',
  styleUrls: ['./annonce-details.page.scss'],
})
export class AnnonceDetailsPage implements OnInit {
  selectedAnnonce;

  constructor(private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private router: Router,
    private listAnnonces: ListAnnoncesService) { }

  ngOnInit() {
   this.selectedAnnonce = this.listAnnonces.getAnnonceById(this.activatedRoute.snapshot.paramMap.get('id')); 

  }
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Do you want to delete this annonce ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.listAnnonces.deleteAnnonce(this.selectedAnnonce.id);
            this.router.navigateByUrl('/annonces');
          },
        },
      ],
    });

    await alert.present();
  }

}
