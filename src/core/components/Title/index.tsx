import {h, FunctionalComponent} from 'preact';
import style from './style.less';

interface IProps {
  value: ITitleControl['value'];
}

export const TitleControl: FunctionalComponent<IProps> = ({value}) => {
  return <tdiv className={style.control}>{value}</tdiv>;
};
