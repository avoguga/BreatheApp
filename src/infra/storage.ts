import { IDelete, IGetValue, ISet } from '@/dtos/persist-dto';
import { MMKV as MMKVStorage } from 'react-native-mmkv';

const MMKV = new MMKVStorage();

export const storage = {
  persist: ({ key, value }: ISet) => MMKV.set(key, value),
  delete: ({ key }: IDelete) => MMKV.delete(key),
  getString: ({ key }: IGetValue) => MMKV.getString(key),
  getNumber: ({ key }: IGetValue) => MMKV.getNumber(key),
  getBoolean: ({ key }: IGetValue) => MMKV.getBoolean(key),
};
