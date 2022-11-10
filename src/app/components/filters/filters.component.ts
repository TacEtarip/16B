import { Component, OnInit } from '@angular/core';
import { FILTERS_OT_LIST } from '@models/constants';
import { IMaster } from '@models/interfaces/IMaster';
import { showMenu as ShowMenuFunction } from '@shared/functions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  showMenu = ShowMenuFunction;
  listaFiltro = FILTERS_OT_LIST;

  // * Filter zone
  landfallFilter: IMaster & { disabled: false };
  serviceFilter: IMaster & { disabled: false };
  serviceLocality: IMaster & { disabled: false };
  fromDateEtaFilter: string;
  toDateEtaFilter: string;
  // *

  constructor() {}

  ngOnInit(): void {}
}
