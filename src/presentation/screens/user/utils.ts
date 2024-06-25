import { StatOption } from './types';

export const statOptions: StatOption[] = [
  {
    id: 1,
    title: 'Tempo Dirigido',
    description: 'Veja o total de horas dirigidas',
    screen: 'DrivenTime',
  },
  {
    id: 2,
    title: 'Histórico Diário',
    description: 'Confira o histórico por dia dirigido',
    screen: 'History',
  },
  {
    id: 3,
    title: 'Configurações de Notificações',
    description: 'Configure o tempo das notificações',
    screen: 'Settings',
  },
];
