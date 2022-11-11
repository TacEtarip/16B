import { Component, OnInit } from '@angular/core';
import { FILTERS_OT_LIST, OT_HEADER_LIST } from '@models/constants';
import { IAssignedWorkOrder } from '@models/interfaces/IAssignedWorkOrder';
import { IMaster } from '@models/interfaces/IMaster';
import { showMenu as ShowMenuFunction } from '@shared/functions';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { OverlayPanel } from 'primeng/overlaypanel';
import { WoAssignmentService } from './../../@services/wo-assignment.service';
@Component({
  selector: 'app-assigned-agmar',
  templateUrl: './assigned-agmar.component.html',
  styleUrls: ['./assigned-agmar.component.scss'],
  providers: [DialogService],
})
export class AssignedAgmarComponent implements OnInit {
  otHeaders = OT_HEADER_LIST;
  loadingTableData = false;
  displayMessageModal = false;
  displayAssignedOtToReview = false;
  displayFiltersModal = false;

  showMenu = ShowMenuFunction;

  listaFiltro = FILTERS_OT_LIST;

  assignedOtToShowMessage: IAssignedWorkOrder;
  assignedOtToReview: IAssignedWorkOrder;

  // * Filter zone
  landfallFilter: IMaster & { disabled: false };
  serviceFilter: IMaster & { disabled: false };
  serviceLocality: IMaster & { disabled: false };
  // *

  tableMenuItems: MenuItem[];

  otAssignmentList: IAssignedWorkOrder[] = [];

  constructor(
    private woAssignment: WoAssignmentService,
    public dialogService: DialogService
  ) {
    this.otAssignmentList = this.woAssignment.getWoAssignments();
  }

  ngOnInit(): void {
    this.tableMenuItems = [
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
    ];
  }

  stopPropagation($event: Event): void {
    $event.stopPropagation();
  }

  openOtMessage(assignedWo: IAssignedWorkOrder) {
    this.assignedOtToShowMessage = assignedWo;
    this.displayMessageModal = true;
  }

  openOtReview(assignedWo: IAssignedWorkOrder) {
    this.displayAssignedOtToReview = true;
    this.assignedOtToReview = assignedWo;
  }

  closeOtMessage() {
    this.displayMessageModal = false;
    this.assignedOtToShowMessage = undefined;
  }

  closeOtReview() {
    this.displayAssignedOtToReview = false;
    this.assignedOtToReview = undefined;
  }

  openFilters(filterOverlayPanel: OverlayPanel, event: any) {
    if (window.innerWidth < 780) {
      this.displayFiltersModal = true;
      return;
    }
    filterOverlayPanel.toggle(event);
  }

  getTextAreaLengthInput(length: number) {
    if (length.toString().length === 1) {
      return `00${length}`;
    }

    if (length.toString().length === 2) {
      return `0${length}`;
    }

    return `${length}`;
  }
}
