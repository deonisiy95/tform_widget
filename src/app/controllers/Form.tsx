import {h, FunctionalComponent} from 'preact';
import {useCallback} from 'preact/compat';
import {Control} from './Control';
import {FormComponent} from '../components/Form';
import {prepareData} from '../utils/data';
import produce from 'immer';
import {submitForm} from '../actions';

interface IProps {
  data: TForm;
  onClose: VoidFunction;
  changeData: (data: TForm) => void;
}

export const Form: FunctionalComponent<IProps> = ({data, onClose, changeData}) => {
  const onSubmit = useCallback(async () => {
    await submitForm(window.widgetId, prepareData(data));
  }, [data]);

  const onChange = useCallback(
    (index: number) => (value: string | boolean) => {
      const newData = produce(data, draft => {
        if (draft[index]) {
          draft[index].data = value;
        }
      });

      changeData(newData);
    },
    [data]
  );

  return (
    <FormComponent onClose={onClose} onSubmit={onSubmit}>
      {data.map((control, index) => (
        <Control key={index} control={control} onChange={onChange(index)}/>
      ))}
    </FormComponent>
  );
};
