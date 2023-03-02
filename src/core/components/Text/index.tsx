import {h, FunctionalComponent} from 'preact';
import style from './style.less';

interface IProps {
  value: ITextControl['value'];
}

export const TextControl: FunctionalComponent<IProps> = ({value}) => {
  return <tdiv className={style.control}>{value}</tdiv>;
};
