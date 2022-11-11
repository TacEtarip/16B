import { ITableHeader } from './interfaces/ITableHeader';

export const FILTERS_OT_LIST = [
  { tipo: 'landfall', name: 'Recalada' },
  { tipo: 'eta', name: 'ETA' },
  { tipo: 'locality', name: 'Localidad' },
  { tipo: 'service', name: 'Servicio' },
  { tipo: 'otNumber', name: 'Nro OT' },
  { tipo: 'scheduledDate', name: 'Fecha Programación' },
  { tipo: 'state', name: 'Estado' },
  { tipo: 'osNumber', name: 'Nro OS' },
];

export const ES_CALENDAR = {
  firstDayOfWeek: 1,
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
  dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ],
  today: 'Hoy',
  clear: 'Clear',
  dateFormat: 'mm/dd/yy',
  weekHeader: 'Wk',
  dateType: 'string',
  currentText: 'Fecha actual',
  firstDay: 1,
};

export const MONTHS_RANGE = 3;

export const LENGTH_TO_ALLOW_AUTO_COMPLETE = 4;

export const JWT_TOKEN = 'idToken';

export const REFRESH_TOKEN = 'refreshToken';

export const USER = 'username';

export const NO_TOKEN_MESSAGE = 'A token was not send';

export const OT_HEADER_LIST: ITableHeader[] = [
  {
    name: 'Recalada',
    col: '15%',
    property: 'landfall',
    action: false,
    sort: true,
    sortActive: false,
    sortDesc: true,
    variableType: 'string',
  },
  {
    name: 'ETA',
    col: '15%',
    property: 'eta',
    action: false,
    sort: true,
    sortActive: false,
    sortDesc: true,
    variableType: 'date',
  },
  {
    name: 'Localidad',
    col: '10%',
    property: 'locality',
    action: false,
    sort: true,
    sortActive: false,
    sortDesc: true,
    variableType: 'string',
  },
  {
    name: 'Servicio',
    col: '15%',
    property: 'service',
    action: false,
    sort: true,
    sortActive: false,
    sortDesc: true,
    variableType: 'string',
  },
  {
    name: 'Nro OT',
    col: '10%',
    property: 'numberOt',
    action: false,
    sort: true,
    sortActive: false,
    sortDesc: true,
    variableType: 'number',
  },
  {
    name: 'Fecha Programación',
    col: '10%',
    property: 'scheduledTime',
    action: false,
    sort: true,
    sortActive: false,
    sortDesc: true,
    variableType: 'date',
  },
  {
    name: 'Estado OT',
    col: '10%',
    property: 'stateId',
    action: false,
    sort: true,
    sortActive: false,
    sortDesc: true,
    variableType: 'number',
  },
  {
    name: 'Nro OS',
    col: '10%',
    property: 'numberOs',
    action: false,
    sort: false,
    sortActive: false,
    sortDesc: true,
    variableType: 'number',
  },
  {
    name: 'Acción',
    col: '5%',
    property: 'accion',
    action: false,
    sort: false,
    sortActive: false,
    sortDesc: true,
    variableType: 'string',
  },
];

export const OT_ASSIGNMENT_STATES = [
  {
    name: 'Asignado',
    value: 74,
    color: '#f2bc00',
  },
  {
    name: 'Asignación aceptada',
    value: 80,
    color: '#f2bc00',
  },
  {
    name: 'Asignación observada',
    value: 76,
    color: '#f2bc00',
  },
];

export const OT_STATES = [
  {
    name: 'Por asignar',
    value: 77,
    color: '#109cf1',
  },
  {
    name: 'Asignado',
    value: 74,
    color: '#f2bc00',
  },
  {
    name: 'Asignación aceptada',
    value: 80,
    color: '#f2bc00',
  },
  {
    name: 'Asignación observada',
    value: 76,
    color: '#f2bc00',
  },
  {
    name: 'Planificado',
    value: 78,
    color: '#f2bc00',
  },
  {
    name: 'En proceso',
    value: 79,
    color: '#f2bc00',
  },
  {
    name: 'Ejecutado',
    value: 73,
    color: '#a3de27',
  },
  {
    name: 'Cancelado',
    value: 82,
    color: '#f7685b',
  },
  {
    name: 'Liquidación solicitada',
    value: 75,
    color: '#a3de27',
  },
  {
    name: 'Liquidación observada',
    value: 81,
    color: '#a3de27',
  },
  {
    name: 'Liquidación aprobada',
    value: 83,
    color: '#a3de27',
  },
];
