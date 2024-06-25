import { cancelAllNotifications } from '@/infra/notifee';
import { storage } from '@/infra/storage';
import { useEffect, useState } from 'react';

export function useNotificationSettings() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [stretchInterval, setStretchInterval] = useState(
    storage.getString({ key: 'stretchInterval' }) ?? '1 hora'
  );
  const [waterInterval, setWaterInterval] = useState(
    storage.getString({ key: 'waterInterval' }) ?? '30 minutos'
  );

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    setIsEnabled(storage.getBoolean({ key: 'notificationsEnabled' }) ?? true);
    setStretchInterval(
      storage.getString({ key: 'stretchInterval' }) ?? '1 hour'
    );
    setWaterInterval(
      storage.getString({ key: 'waterInterval' }) ?? '30 minutes'
    );
  };

  const toggleSwitch = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    saveEnabledState(newState);
  };

  const saveEnabledState = (enabledState: boolean) => {
    storage.persist({ key: 'notificationsEnabled', value: enabledState });
  };

  const saveSettings = () => {
    saveEnabledState(isEnabled);
    if (isEnabled) {
      storage.persist({ key: 'stretchInterval', value: stretchInterval });
      storage.persist({ key: 'waterInterval', value: waterInterval });
    } else {
      storage.delete({ key: 'stretchInterval' });
      storage.delete({ key: 'waterInterval' });
    }
  };

  useEffect(() => {
    if (!isEnabled) {
      cancelAllNotifications();
    }
  }, [isEnabled]);

  useEffect(() => {
    saveSettings();
  }, [stretchInterval, waterInterval]);

  return {
    isEnabled,
    stretchInterval,
    waterInterval,
    setStretchInterval,
    setWaterInterval,
    toggleSwitch,
  };
}
