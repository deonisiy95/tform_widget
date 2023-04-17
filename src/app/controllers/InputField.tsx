import {FunctionalComponent, h} from 'preact';
import {useEffect} from 'preact/compat';
import Textarea from 'src/core/components/Textarea';
import Input from 'src/core/components/Input';
import {Field} from 'src/core/components/Field';
import useInput from 'src/core/hooks/useInput';
import {Validation} from 'src/core/utils/validation';

interface IProps {
  input: IInputControl;
  onChange: (value: string | boolean) => void;
}

export const InputField: FunctionalComponent<IProps> = ({input, onChange}) => {
  const {value, onChange: onInputChange, invalid} = useInput(
    input.data,
    input.value.is_require ? [Validation.notEmpty] : []
  );

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Field title={input.value.title} text={input.value.text}>
      {input.value.is_multiline ? (
        <Textarea
          invalid={invalid}
          placeholder={input.value.placeholder}
          maxLength={1024}
          onChange={onInputChange}
          value={value}
        />
      ) : (
        <Input
          invalid={invalid}
          placeholder={input.value.placeholder}
          maxLength={255}
          onChange={onInputChange}
          value={value}
        />
      )}
    </Field>
  );
};
