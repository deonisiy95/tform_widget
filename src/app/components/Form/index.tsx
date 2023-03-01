import {h, FunctionalComponent} from 'preact';
import {useEffect, useState} from 'preact/compat';
import {useIcon} from 'src/core/hooks/useIcon';

import style from './style.less';
import cn from 'classnames';
import {TRANSITIONAL_DURATION_FORM} from 'src/core/const/app';

interface IProps {
  onClose: VoidFunction;
}

export const FormComponent: FunctionalComponent<IProps> = ({children, onClose}) => {
  const closeIcon = useIcon('close');
  const [isHide, setHide] = useState(false);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), TRANSITIONAL_DURATION_FORM);
  }, []);

  const closeHandler = () => {
    setHide(true);
    onClose();
  };

  return (
    <tdiv className={cn(style.formWrapper, {[style.hide]: isHide, [style.show]: isShow})}>
      <tdiv className={style.form}>{children}</tdiv>
      <div className={cn(style.close, closeIcon.style)} onClick={closeHandler} />
    </tdiv>
  );
};
