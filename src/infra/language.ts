import { NativeModules, Platform } from 'react-native';
import { create } from 'zustand';
import { storage } from './storage';

type LanguageState = {
  language: 'pt' | 'en';
  setLanguage: (language: string) => void;
  resetLanguage: () => void;
};

const getDeviceLanguage = () => {
  const locale: 'pt' | 'en' =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;
  return locale ? locale.split('_')[0] : 'en';
};

console.log(getDeviceLanguage());

export const useLanguageStore = create<LanguageState>((set) => ({
  language:
    (storage.getString({ key: 'language' }) as 'pt' | 'en') ||
    getDeviceLanguage(),
  setLanguage: (language: string) => {
    storage.persist({ key: 'language', value: language });
    set({ language: language as 'pt' | 'en' });
  },
  resetLanguage: () => {
    const deviceLanguage = getDeviceLanguage();
    storage.persist({ key: 'language', value: deviceLanguage });
    set({ language: deviceLanguage as 'pt' | 'en' });
  },
}));
