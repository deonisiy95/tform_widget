import {useCallback, useState, ChangeEventHandler, ChangeEvent} from 'preact/compat';

export default function useInput(
  defaultValue: string = '',
  validators: Array<(value: string) => boolean> = []
) {
  const [invalid, setInvalid] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = (event.target as HTMLInputElement)?.value;

      if (newValue !== value) {
        setValue(newValue);
      }

      if (validators.length > 0) {
        const existError = validators.some(validators => {
          return !validators(newValue);
        });

        setInvalid(existError);
      }
    },
    [value, validators]
  );

  return {
    value,
    onChange,
    invalid
  };
}
