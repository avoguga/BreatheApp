import notifee, {
  AndroidImportance,
  AuthorizationStatus,
  EventType,
  Notification,
  RepeatFrequency,
  TriggerType,
} from "@notifee/react-native";

const createChannel = async () => {
  await notifee.createChannel({
    id: "default",
    name: "Default Channel",
  });
};

export const registerForeground = async () => {
  notifee.onBackgroundEvent(async () => {
    console.log("OK");
  });
  notifee.registerForegroundService((notification) => {
    console.log(notification, "notf");
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

export async function scheduleHealthReminders() {
  const now = Date.now();

  await notifee.createTriggerNotification(
    {
      title: "🚰 Hora de Beber Água",
      body: "Mantenha-se hidratado! Beba um copo de água.",
      android: {
        channelId: "default",
        smallIcon: "ic_launcher",
        importance: AndroidImportance.HIGH,
      },
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: now + 3600000,
      repeatFrequency: RepeatFrequency.HOURLY,
    }
  );

  await notifee.createTriggerNotification(
    {
      title: "🤸 Hora de se Alongar",
      body: "Levante-se e faça um breve alongamento!",
      android: {
        channelId: "default",
        smallIcon: "ic_launcher",
        importance: AndroidImportance.HIGH,
      },
    },
    {
      type: TriggerType.TIMESTAMP,
      timestamp: now + 7200000,
      repeatFrequency: RepeatFrequency.HOURLY,
    }
  );
}

export const initializeNotifee = async () => {
  const permission = await requestNotificationPermission();
  if (permission.authorizationStatus !== AuthorizationStatus.AUTHORIZED) {
    return;
  }
  await registerForeground();
  createChannel();
};

export const displayNotification = async (notification: Notification) => {
  notifee.displayNotification(notification);
};
