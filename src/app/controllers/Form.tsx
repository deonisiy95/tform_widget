import {h, FunctionalComponent} from 'preact';
import {useCallback, useState} from 'preact/compat';
import {Control} from './Control';
import {FormComponent} from '../components/Form';
import {prepareData} from '../utils/data';
import produce from 'immer';
import {submitForm} from '../actions';

interface IProps {
  formData: TForm;
  onClose: VoidFunction;
}

export const Form: FunctionalComponent<IProps> = ({formData, onClose}) => {
  const [form, setForm] = useState(formData);

  const onSubmit = useCallback(async () => {
    await submitForm(window.widgetId, prepareData(form));
    setForm(formData);
  }, [form]);

  const onChange = useCallback(
    (index: number) => (value: string | boolean) => {
      const newData = produce(form, draft => {
        if (draft[index]) {
          draft[index].data = value;
        }
      });

      setForm(newData);
    },
    [form]
  );

  return (
    <FormComponent onClose={onClose} onSubmit={onSubmit}>
      {form.map((control, index) => (
        <Control key={index} control={control} onChange={onChange(index)} />
      ))}
    </FormComponent>
  );
};
