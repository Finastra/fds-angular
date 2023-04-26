import { Component, OnInit } from '@angular/core';
import { nestedRoutes } from '../../nested-routes';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'ffdc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NgFor, MatCardModule, RouterLink]
})
export class HomeComponent implements OnInit {
  nestedRoutes = nestedRoutes;
  constructor() {}

  ngOnInit() {}
}
