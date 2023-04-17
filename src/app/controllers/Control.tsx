import {h, FunctionalComponent} from 'preact';
import {CheckBox} from 'src/core/components/Checkbox';
import {Select} from 'src/core/components/Select';
import {Field} from 'src/core/components/Field';
import {TextControl} from 'src/core/components/Text';
import {TitleControl} from 'src/core/components/Title';
import {InputField} from './InputField';

interface IProps {
  control: TControl;
  onChange: (value: string | boolean) => void;
}

export const Control: FunctionalComponent<IProps> = ({control, onChange}) => {
  switch (control.type) {
    case 'checkbox':
      return (
        <CheckBox
          checked={control.data ?? false}
          required={control.value.is_require}
          onChange={event => onChange((event.target as HTMLInputElement).checked)}
        >
          {control.value.text}
        </CheckBox>
      );
    case 'input':
      return <InputField input={control} onChange={onChange} />;
    case 'select':
      return (
        <Field title={control.value.title} text={control.value.text}>
          <Select
            value={control.data}
            options={control.value.options.map((item, index) => ({
              key: String(index),
              value: item
            }))}
            onChange={key => onChange(key)}
          />
        </Field>
      );
    case 'text':
      return <TextControl value={control.value} />;
    case 'title':
      return <TitleControl value={control.value} />;
    default:
      return null;
  }
};
