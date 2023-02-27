import {h, FunctionalComponent} from 'preact';
import {useMemo, useState, useCallback, useEffect, useRef} from 'preact/compat';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  value?: string;
  options: Array<{key: string; value: string}>;
  onChange: (key: string) => void;
}

const MAX_HEIGHT_OPTIONS_LIST = 200;

export const Select: FunctionalComponent<IProps> = ({value, options, onChange}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState('top');
  const buttonRef = useRef<HTMLDivElement>();
  const screen = window.parent || window;

  const onOutClick = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    return () => screen.removeEventListener('click', onOutClick);
  }, []);

  useEffect(() => {
    isActive
      ? screen.addEventListener('click', onOutClick)
      : screen.removeEventListener('click', onOutClick);
  }, [isActive]);

  const selectedItem = useMemo(() => {
    return options.find(item => item.key === value)?.value ?? 'Not selected';
  }, [value, options]);

  const onClick = () => {
    if (!isActive && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      const freeSpace = screen.innerHeight - (rect?.top + rect?.height);

      setPosition(freeSpace < MAX_HEIGHT_OPTIONS_LIST ? 'bottom' : 'top');
    }

    setIsActive(!isActive);
  };

  return (
    <tdiv className={style.control} ref={buttonRef}>
      <tdiv className={style.button} onClick={onClick}>
        {selectedItem}
      </tdiv>
      {isActive ? (
        <tdiv className={cn(style.options, style[position])}>
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
