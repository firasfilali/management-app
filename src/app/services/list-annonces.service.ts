import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListAnnoncesService {
  private tabAnnonces = [
    {
      id: 1,
      titre: 'Iphone 13',
      marque: 'Apple',
      prix: 4000,
      category: "Smartphone",
      gouvernement: 'Ariana',
      adresse:'rue ibn jazar',
      couleur: 'rouge',
      ram: '8 GO',
      stockage: '128 GO',
      appareilphoto: 'Triple 50MP + 12MP + 12MP',
      listOfImage: ['https://cdn.mos.cms.futurecdn.net/kWcJaVDKbrd548xLhKfWcc.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALlmu9IXo5JYpXTq2ZXBdbBBxq9RvHi-oVw&usqp=CAU',],
      description: 'Iphone en bon etat avec cache en bleu importé de l`amerique',
      idUser:1,
    },
    {
      id: 2,
      titre: 'Samsung s21',
      marque:'Samsung',
      prix: 3000,
      category: "Smartphone",
      gouvernement: 'Nabeul',
      adresse:'Manzel temime',
      couleur: 'rouge',
      ram: '8 GO',
      stockage: '128 GO',
      appareilphoto: 'Triple 50MP + 12MP + 12MP',
      listOfImage: ['https://selectshop.tn/9228-medium_default/smartphone-samsung-galaxy-s21-5g-double-sim-violet.jpg','https://fdn2.mobgsm.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg',],
      description: 'Smartphone samsung s21 / 4G / Double sim / 128 GO',
      idUser:2,
    },
    {
      id: 3,
      titre: 'Apple MacBook',
      marque:'Apple',
      prix: 3895,
      category: "Laptop",
      gouvernement: 'Sousse',
      adresse:'25 rue oman',
      couleur: 'bleu',
      ram: '8 GO',
      stockage: '256 GO SSD',
      carteGraphique: 'Intel HD Graphics',
      listOfImage: ['https://www.tunisianet.com.tn/218146-large/pc-portable-apple-macbook-pro-m1-133-512-go-ssd-gris-sideral.jpg',
      'https://www.istore.com.tn/4116-large_default/macbook-pro-13-pouces-puce-m1-8-go-256-go-couleur-gris-sideral.jpg',],
      description: 'a vendre un APPLE MACBOOK AIR M1 (2020) 8GO 256GO SSD - GOLD neuf',
      idUser:1,
    },
    {
      id: 4,
      titre: 'Laptop Gamer LENOVO',
      marque:'Lenovo',
      prix: 6000,
      category: "Laptop",
      gouvernement: 'Ariana',
      adresse:'25 rue london',
      couleur: 'noir',
      ram: '16 GO',
      stockage: '1 To SSD',
      carteGraphique: ' NVIDIA GeForce RTX 3070 TI',
      listOfImage: ['https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/8/2/82rd006ufg_aa_12_2.jpg',
      'https://jmb.com.tn/wp-content/uploads/2022/10/pc-portable-lenovo-ideapad-gaming-3-15ach6-ryzen-7-5800h-16-go-rtx-3050-4gb-noir-souris-gaming-lenovo-m100-offerte-1-1.png',],
      description: 'a vendre un PC PORTABLE GAMER LENOVO LÉGION 5 15ARH7H AMD RYZEN 7 16GO RTX 3070TI neuf',
      idUser:2,
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

  getAnnonceByUser(id){
    return this.tabAnnonces.filter((a) => a.idUser == id);
  }

  getAllAnnonceByCategory(categ){
    return this.tabAnnonces.filter((a) => a.category == categ);
  }

  deleteAnnonce(id){
    this.tabAnnonces = this.tabAnnonces.filter((c) => c.id != id)
  }

  constructor() { }
}


