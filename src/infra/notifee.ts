import notifee, {
  AuthorizationStatus,
  EventType,
  Notification,
} from '@notifee/react-native';

const createChannel = async () => {
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
};

export const registerForeground = async () => {
  notifee.onBackgroundEvent(async () => {
    console.log('OK');
  });
  notifee.registerForegroundService((notification) => {
    console.log(notification, 'notf');
    return new Promise(() => {
      notifee.onForegroundEvent(async ({ type }) => {
        if (type === EventType.PRESS) {
          await notifee.stopForegroundService();
        }
      });
    });
  });
};

const requestNotificationPermission = async () => {
  return notifee.requestPermission();
};

const initializeNotifee = async () => {
  const permission = await requestNotificationPermission();
  if (permission.authorizationStatus !== AuthorizationStatus.AUTHORIZED) {
    return;
  }
  await registerForeground();
  createChannel();
};

export const displayNotification = async (notification: Notification) => {
  await initializeNotifee();
  notifee.displayNotification(notification);
};
