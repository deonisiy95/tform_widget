import {h} from 'preact';
import style from './style.less';
import {TForm} from 'src/@types/app';
import Input from 'src/core/components/Input';
import {CheckBox} from 'src/core/components/Checkbox';
import {Select} from '../../core/components/Select';

interface IProps {
  form: TForm;
}

export function AppComponent({form}: IProps) {
  return (
    <div className={style.container}>
      {form[0].value}
      <Input value={'asd'} />
      <CheckBox checked={true} />
      <Select
        value={'two'}
        options={[
          {key: 'one', value: 'One'},
          {key: 'two', value: 'Two'},
          {key: 'three', value: 'Three'}
        ]}
        onChange={key => console.log(key)}
      />
    </div>
  );
}
