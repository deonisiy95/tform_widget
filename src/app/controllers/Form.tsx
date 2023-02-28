import {h, FunctionalComponent} from 'preact';
import {Control} from './Control';
import {FormComponent} from '../components/Form';

interface IProps {
  data: TForm;
  onClose: VoidFunction;
}

export const Form: FunctionalComponent<IProps> = ({data, onClose}) => {
  return (
    <FormComponent onClose={onClose}>
      {data.map((control, index) => (
        <Control key={index} control={control} />
      ))}
    </FormComponent>
  );
};
