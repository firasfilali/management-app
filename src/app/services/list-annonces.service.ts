import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListAnnoncesService {
  private tabAnnonces = [
    {
      id: 1,
      titre: 'BMW',
      prix: 6666,
      nom: 'Firas',
      telephone: 2222222,
      category: 'Voitures',
      localisation: 'Ariana',
      mainImage: 'https://hips.hearstapps.com/hmg-prod/images/2023-bmw-i7-front-1650375835.jpg?crop=0.929xw:0.696xh;0.0714xw,0.222xh&resize=1200:*',
      listOfImage: ['https://hips.hearstapps.com/hmg-prod/images/2023-bmw-i7-front-1650375835.jpg?crop=0.929xw:0.696xh;0.0714xw,0.222xh&resize=1200:*','https://www.prixmotor.es/wp-content/uploads/2022/03/7K1A5572-scaled.jpg'],
      description: 'one day inchalah hhhhhhhhhhhhhh'
    },
    {
      id: 2,
      titre: 'Mercedes',
      prix: 6666,
      nom: 'Firas',
      telephone: 69,
      category: 'Voitures',
      localisation: 'Ariana',
      mainImage: 'https://www.prixmotor.es/wp-content/uploads/2022/03/7K1A5572-scaled.jpg',
      listOfImage: ['https://www.prixmotor.es/wp-content/uploads/2022/03/7K1A5572-scaled.jpg','https://www.prixmotor.es/wp-content/uploads/2022/03/7K1A5572-scaled.jpg'],
      description: 'one day inchalah'
    },
  ];

  addAnnonce(newAnnonce){
    newAnnonce.id = this.tabAnnonces[this.tabAnnonces.length - 1].id + 1;
    newAnnonce['listOfImage'] = newAnnonce['listOfImage'].split(',');
    this.tabAnnonces.push(newAnnonce);
  }

  getAllAnnonces() {
    return this.tabAnnonces;
  } 

  getAnnonceById(id){
    return this.tabAnnonces.find((a) => a.id == id);
  }

  deleteAnnonce(id){
    this.tabAnnonces = this.tabAnnonces.filter((c) => c.id != id)
  }

  constructor() { }
}


