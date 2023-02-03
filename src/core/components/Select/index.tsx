import {h, FunctionalComponent} from 'preact';
import {useMemo, useState} from 'preact/compat';
import style from './style.less';

interface IProps {
  value: string;
  options: Array<{key: string; value: string}>;
  onChange: (key: string) => void;
}

export const Select: FunctionalComponent<IProps> = ({value, options, onChange}) => {
  const [isActive, setIsActive] = useState(false);

  const selectedItem = useMemo(() => {
    return options.find(item => item.key === value)?.value ?? 'Not selected';
  }, [value, options]);

  return (
    <tdiv className={style.control}>
      <div className={style.button} onClick={() => setIsActive(!isActive)}>
        {selectedItem}
      </div>
      {isActive ? (
        <div className={style.options}>
          <div className={style.list}>
            {options?.map(item => (
              <div key={item.key} onClick={() => onChange(item.key)}>
                {item.value}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </tdiv>
  );
};
