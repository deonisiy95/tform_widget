import {h} from 'preact';
import style from './style.less';
import {TForm} from 'src/@types/app';

interface IProps {
  form: TForm;
}

export function AppComponent({form}: IProps) {
  return <div className={style.container}>{form[0].value}</div>;
}
