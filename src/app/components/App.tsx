import {h} from 'preact';
import style from './style.less';
import {TForm} from 'src/@types/app';
import Input from 'src/core/components/Input';
import {CheckBox} from 'src/core/components/Checkbox';

interface IProps {
  form: TForm;
}

export function AppComponent({form}: IProps) {
  return <div className={style.container}>
    {form[0].value}
    <Input value={'asd'}/>
    <CheckBox checked={true} />
  </div>;
}
