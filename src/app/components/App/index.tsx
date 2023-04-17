import {h} from 'preact';
import {useState, useCallback} from 'preact/compat';
import {Form} from 'src/app/controllers/Form';
import {MainButton} from '../MainButton';
import {TRANSITIONAL_DURATION_FORM} from 'src/core/const/app';
import style from './style.less';

interface IProps {
  form: TForm;
}

export function AppComponent({form: formData}: IProps) {
  const [state, setState] = useState('button');
  const [form, setForm] = useState(formData);

  const onClose = useCallback(() => {
    setState('transition');

    setTimeout(() => {
      setState('button');
    }, TRANSITIONAL_DURATION_FORM);
  }, []);

  const onOpen = useCallback(() => {
    setState('transition');

    setTimeout(() => {
      setState('form');
    }, TRANSITIONAL_DURATION_FORM);
  }, []);

  const changeData = useCallback(form => {
    setForm(form);
  }, []);

  return (
    <tdiv className={style.container}>
      {['form', 'transition'].includes(state) ? <Form data={form} onClose={onClose} changeData={changeData}/> : null}
      {['button', 'transition'].includes(state) ? <MainButton onClick={onOpen} /> : null}
    </tdiv>
  );
}
