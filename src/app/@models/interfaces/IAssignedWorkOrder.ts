export interface IAssignedWorkOrder {
  landfall: string;
  eta: string;
  locality: string;
  service: string;
  numberOt: number;
  scheduledTime: string;
  stateId: number;
  numberOs: number;
  message?: string;
}
