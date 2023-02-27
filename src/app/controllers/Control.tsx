import {h, FunctionalComponent} from 'preact';
import {CheckBox} from 'src/core/components/Checkbox';
import Input from 'src/core/components/Input';
import {Select} from 'src/core/components/Select';
import Textarea from '../../core/components/Textarea';
import {Field} from '../../core/components/Field';

interface IProps {
  control: TControl;
}

export const Control: FunctionalComponent<IProps> = ({control}) => {
  switch (control.type) {
    case 'checkbox':
      return (
        <CheckBox checked={false} required={control.value.is_require}>
          {control.value.text}
        </CheckBox>
      );
    case 'input':
      return (
        <Field title={control.value.title} text={control.value.text}>
          {control.value.is_multiline ? (
            <Textarea placeholder={control.value.placeholder} />
          ) : (
            <Input placeholder={control.value.placeholder} />
          )}
        </Field>
      );
    case 'select':
      return (
        <Field title={control.value.title} text={control.value.text}>
          <Select
            options={control.value.options.map((item, index) => ({
              key: String(index),
              value: item
            }))}
            onChange={key => console.log(key)}
          />
        </Field>
      );
    case 'text':
      return <tdiv>{control.value}</tdiv>;
    case 'title':
      return <h1>{control.value}</h1>;
    default:
      return null;
  }
};
