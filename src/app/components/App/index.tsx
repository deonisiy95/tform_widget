import {h} from 'preact';
import {useState} from 'preact/compat';
import style from './style.less';
import {Form} from 'src/app/controllers/Form';
import {MainButton} from '../MainButton';

interface IProps {
  form: TForm;
}

export function AppComponent({form}: IProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <tdiv className={style.container}>
      {isOpen ? <Form data={form} /> : <MainButton onClick={() => setOpen(true)} />}
    </tdiv>
  );
}
