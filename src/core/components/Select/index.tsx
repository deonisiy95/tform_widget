import {h, FunctionalComponent} from 'preact';
import {useMemo, useState, useCallback, useEffect} from 'preact/compat';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  value: string;
  options: Array<{key: string; value: string}>;
  onChange: (key: string) => void;
}

export const Select: FunctionalComponent<IProps> = ({value, options, onChange}) => {
  const [isActive, setIsActive] = useState(false);
  const onOutClick = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    return () => document.removeEventListener('click', onOutClick);
  }, []);

  useEffect(() => {
    isActive
      ? document.addEventListener('click', onOutClick)
      : document.removeEventListener('click', onOutClick);
  }, [isActive]);

  const selectedItem = useMemo(() => {
    return options.find(item => item.key === value)?.value ?? 'Not selected';
  }, [value, options]);

  return (
    <tdiv className={style.control}>
      <tdiv className={style.button} onClick={() => setIsActive(!isActive)}>
        {selectedItem}
      </tdiv>
      {isActive ? (
        <tdiv className={style.options}>
          <tdiv className={cn(style.list, 'scroll')}>
            {options?.map(item => (
              <tdiv key={item.key} onClick={() => onChange(item.key)}>
                {item.value}
              </tdiv>
            ))}
          </tdiv>
        </tdiv>
      ) : null}
    </tdiv>
  );
};
