import { Injectable } from '@angular/core';
import { IAssignedWorkOrder } from './../@models/interfaces/IAssignedWorkOrder';

@Injectable({
  providedIn: 'root',
})
export class WoAssignmentService {
  assignedWoListMock: IAssignedWorkOrder[] = [
    {
      landfall: 'ALIOTH-23N',
      eta: '2022-11-09T17:46:30.872Z',
      locality: 'Callao',
      service: 'Lubricantes',
      numberOt: 12353,
      scheduledTime: '2022-11-09T17:46:30.872Z',
      stateId: 74,
      numberOs: 6574,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate orci vitae tortor efficitur ullamcorper. Mauris maximus ultricies diam, in lacinia elit lacinia eleifend. Suspendisse potenti. Cras sollicitudin, orci id interdum viverra, urna elit imperdiet ex, non malesuada eros arcu vel turpis. Suspendisse molestie dolor non dapibus tincidunt. Integer gravida feugiat ex. In vel luctus purus. Phasellus venenatis facilisis felis, non aliquet leo congue nec. Vivamus congue interdum faucibus. Pellentesque vitae est placerat, volutpat nisl sit amet, sollicitudin augue.',
    },
    {
      landfall: 'ALIOTH-23N',
      eta: '2022-11-09T17:46:30.872Z',
      locality: 'Callao',
      service: 'Lubricantes',
      numberOt: 12353,
      scheduledTime: '2022-11-09T17:46:30.872Z',
      stateId: 74,
      numberOs: 6574,
    },
    {
      landfall: 'ALIOTH-23N',
      eta: '2022-11-09T17:46:30.872Z',
      locality: 'Callao',
      service: 'Lubricantes',
      numberOt: 12353,
      scheduledTime: '2022-11-09T17:46:30.872Z',
      stateId: 74,
      numberOs: 6574,
    },
  ];

  constructor() {}

  getWoAssignments(): IAssignedWorkOrder[] {
    return this.assignedWoListMock;
  }
}
