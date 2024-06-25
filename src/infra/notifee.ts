import notifee, {
  AndroidImportance,
  AuthorizationStatus,
  Notification,
  RepeatFrequency,
  TriggerType,
} from '@notifee/react-native';

type Interval = '30 minutes' | '1 hour' | '2 hours' | '3 hours';

interface ScheduleParams {
  waterInterval: Interval;
  stretchInterval: Interval;
}

const createChannel = async () => {
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });
};

const requestNotificationPermission = async () => {
  return notifee.requestPermission();
};

export async function scheduleHealthReminders({
  waterInterval,
  stretchInterval,
}: ScheduleParams) {
  const now = Date.now();
  const waterDelay = convertIntervalToMilliseconds(waterInterval);
  const stretchDelay = convertIntervalToMilliseconds(stretchInterval);

  await notifee.createTriggerNotification(
    {
      title: '🚰 Hora de Beber Água',
      body: 'Mantenha-se hidratado! Beba um copo de água.',
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher',
        importance: AndroidImportance.HIGH,
      },
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: now + waterDelay,
      repeatFrequency: RepeatFrequency.HOURLY,
    }
  );

  await notifee.createTriggerNotification(
    {
      title: '🤸 Hora de se Alongar',
      body: 'Levante-se e faça um breve alongamento!',
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher',
        importance: AndroidImportance.HIGH,
      },
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: now + stretchDelay,
      repeatFrequency: RepeatFrequency.HOURLY,
    }
  );
}

export const initializeNotifee = async () => {
  const permission = await requestNotificationPermission();
  if (permission.authorizationStatus !== AuthorizationStatus.AUTHORIZED) {
    console.error('Notification permission not authorized');
    return;
  }
  await createChannel();
};

export const cancelAllNotifications = () => {
  notifee.cancelAllNotifications();
};

export const displayNotification = async (notification: Notification) => {
  await notifee.displayNotification(notification);
};

function convertIntervalToMilliseconds(interval: Interval): number {
  const [number, unit] = interval.split(' ');
  const time = parseInt(number, 10);
  return unit.startsWith('hour') ? time * 3600000 : time * 60000;
}
