import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListAnnoncesService } from '../services/list-annonces.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {
  selectedOption;
  inputValue = '';
  preview: string;

  constructor(private annonceSer : ListAnnoncesService,
    private router : Router) { }

  ngOnInit() {
  }

  addNewAnnonce(valueForm){
    this.annonceSer.addAnnonce(valueForm);
    this.router.navigateByUrl('/annonces');

  }

}
