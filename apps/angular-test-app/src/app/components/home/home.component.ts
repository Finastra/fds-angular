import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { environment } from '@env/environment';
import { nestedRoutes } from '../../nested-routes';

@Component({
  selector: 'ffdc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgFor, MatCardModule, RouterLink]
})
export class HomeComponent implements OnInit {
  nestedRoutes = nestedRoutes;
  version = environment.version;

  constructor() {}

  ngOnInit() {}
}
