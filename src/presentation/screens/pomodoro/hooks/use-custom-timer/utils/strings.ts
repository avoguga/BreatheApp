const strings = {
  en: {
    restNotificationTitle: '⏰ Break Time!',
    restNotificationBody: (minutes: number) =>
      `Time to relax! Take a break for ${minutes} minutes. 😌`,
    workNotificationTitle: '🚀 Back to Work!',
    workNotificationBody: (minutes: number) =>
      `Time to get back to work! Let's go for ${minutes} minutes. 💪`,
  },
  pt: {
    restNotificationTitle: '⏰ Pausa!',
    restNotificationBody: (minutes: number) =>
      `Hora de descansar! Relaxe por ${minutes} minutos. 😌`,
    workNotificationTitle: '🚀 Volte ao trabalho!',
    workNotificationBody: (minutes: number) =>
      `Hora de voltar ao trabalho! Vamos lá por ${minutes} minutos. 💪`,
  },
};

export default strings;
