import {h, FunctionalComponent} from 'preact';
import {useState} from 'preact/compat';
import {useIcon} from 'src/core/hooks/useIcon';

import style from './style.less';
import cn from 'classnames';

interface IProps {
  onClose: VoidFunction;
}

export const FormComponent: FunctionalComponent<IProps> = ({children, onClose}) => {
  const closeIcon = useIcon('close');
  const [isHide, setHide] = useState(false);

  const closeHandler = () => {
    setHide(true);
  };

  const onTransitionEnd = (event: TransitionEvent) => {
    if ((event.target as HTMLDivElement)?.classList.contains(style.formWrapper)) {
      onClose();
    }
  };

  return (
    <tdiv
      className={cn(style.formWrapper, {[style.hide]: isHide})}
      onTransitionEnd={onTransitionEnd}
    >
      <tdiv className={style.form}>{children}</tdiv>
      <div className={cn(style.close, closeIcon.style)} onClick={closeHandler} />
    </tdiv>
  );
};
