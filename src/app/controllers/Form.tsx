import {h, FunctionalComponent} from 'preact';
import {Control} from './Control';

interface IProps {
  data: TForm;
}

export const Form: FunctionalComponent<IProps> = ({data}) => {
  return (
    <tdiv>
      {data.map((control, index) => (
        <Control key={index} control={control} />
      ))}
    </tdiv>
  );
};
