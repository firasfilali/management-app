import { Component, OnInit } from '@angular/core';
import { ListAnnoncesService } from '../services/list-annonces.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {
  tab = [];
  constructor(private listAnnonces: ListAnnoncesService) { }

  ngOnInit(): void {
    this.tab = this.listAnnonces.getAllAnnonces();
  }

  ionViewDidEnter(){
    this.tab = this.listAnnonces.getAllAnnonces();
  }

  getAllAnnonces(){
    this.tab = this.listAnnonces.getAllAnnonces();
  }

  getAnnonce(categ){
    this.tab = this.listAnnonces.getAllAnnonceByCategory(categ);
  }

}
