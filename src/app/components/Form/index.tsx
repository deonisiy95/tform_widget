import {h, FunctionalComponent} from 'preact';
import {useEffect, useState, useCallback} from 'preact/compat';
import {useIcon} from 'src/core/hooks/useIcon';

import style from './style.less';
import cn from 'classnames';
import {TRANSITIONAL_DURATION_FORM} from 'src/core/const/app';
import {Button} from 'src/core/components/Button';

interface IProps {
  onClose: VoidFunction;
  onSubmit: () => Promise<void>;
}

export const FormComponent: FunctionalComponent<IProps> = ({children, onClose, onSubmit}) => {
  const closeIcon = useIcon('close');
  const [isHide, setHide] = useState(false);
  const [isShow, setShow] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), TRANSITIONAL_DURATION_FORM);
  }, []);

  const submitHandler = useCallback(() => {
    setIsSaving(true);

    onSubmit().finally(() => {
      setIsSaving(false);
    });
  }, [onSubmit]);

  const closeHandler = () => {
    setHide(true);
    onClose();
  };

  return (
    <tdiv className={cn(style.formWrapper, {[style.hide]: isHide, [style.show]: isShow})}>
      <tdiv className={style.form}>
        {children}
        <Button className={style.submit} size={'sm'} onClick={submitHandler} isLoad={isSaving}>
          Отправить
        </Button>
      </tdiv>
      <div className={cn(style.close, closeIcon.style)} onClick={closeHandler} />
    </tdiv>
  );
};
