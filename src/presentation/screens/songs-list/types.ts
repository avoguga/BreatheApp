import { IAudioService } from './hooks/types';

export type MusicItem = {
  id: string;
  title: string;
  artist: string;
  image: string;
  file: string; // URL do arquivo de música
};

export type SongItemProps = {
  musicItem: MusicItem;
} & IAudioService;
