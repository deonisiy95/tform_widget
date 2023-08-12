import {h, FunctionalComponent} from 'preact';
import {useState, useEffect} from 'preact/compat';
import {TRANSITIONAL_DURATION_FORM} from 'src/core/const/app';
import Icon from 'src/core/components/Icon';

import style from './style.less';
import cn from 'classnames';

interface IProps {
  label?: TLabel;
  onClick: VoidFunction;
}

const ICONS = ['mail', 'question', 'shopping'];

export const MainButton: FunctionalComponent<IProps> = ({label, onClick}) => {
  const [isShow, setShow] = useState(false);
  const [isHide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), TRANSITIONAL_DURATION_FORM);
  }, []);

  const clickHandler = () => {
    setHide(true);
    onClick();
  };

  const styles = label?.color ? {backgroundColor: label?.color} : {};

  return (
    <tdiv
      className={cn(style.button, {[style.hide]: isHide, [style.show]: isShow})}
      style={styles}
      onClick={clickHandler}
    >
      <Icon type={ICONS.includes(label?.icon) ? label?.icon : 'question'} className={style.icon} />
      {label?.text ? <div className={style.text}>{label?.text}</div> : null}
    </tdiv>
  );
};
