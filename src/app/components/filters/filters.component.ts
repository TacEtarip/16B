import { Component, OnInit } from '@angular/core';
import { FILTERS_OT_LIST, OT_ASSIGNMENT_STATES } from '@models/constants';
import { ICheckboxFiler } from '@models/interfaces/ICheckboxFiler';
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
  otStates = OT_ASSIGNMENT_STATES;

  // * Filter zone
  landfallFilter: IMaster & { disabled: false };
  serviceFilter: IMaster & { disabled: false };
  serviceLocality: IMaster & { disabled: false };
  otCodeFilter = { value: '', disabled: false };
  fromDateEtaFilter: string;
  toDateEtaFilter: string;
  fromDateSDFilter: string;
  toDateSDFilter: string;
  statesFilters: ICheckboxFiler[] = [];
  osCodeFilter = { value: '', disabled: false };
  // *

  constructor() {
    this.statesFilters = this.otStates.map((state) => {
      return { ...state, active: true };
    });
  }

  ngOnInit(): void {}
}
