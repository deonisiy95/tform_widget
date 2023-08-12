import {h, FunctionalComponent} from 'preact';
import {useEffect, useState, useCallback, useMemo} from 'preact/compat';
import {useIcon} from 'src/core/hooks/useIcon';
import {useLongLoading} from 'src/core/hooks/useLongLoading';

import style from './style.less';
import cn from 'classnames';
import {TRANSITIONAL_DURATION_FORM} from 'src/core/const/app';
import {Button} from 'src/core/components/Button';
import {Loader} from '../../../core/components/Loader';

interface IProps {
  onClose: VoidFunction;
  onSubmit: () => Promise<void>;
}

export const FormComponent: FunctionalComponent<IProps> = ({children, onClose, onSubmit}) => {
  const closeIcon = useIcon('close');
  const [isHide, setHide] = useState(false);
  const [isShow, setShow] = useState(false);
  const [isSend, setSend] = useState(false);
  const [isSaving, setIsSaving] = useLongLoading(false, 800);

  useEffect(() => {
    setTimeout(() => setShow(true), TRANSITIONAL_DURATION_FORM);
  }, []);

  const submitHandler = useCallback(() => {
    setIsSaving(true);

    onSubmit().finally(() => {
      setIsSaving(false);
      setSend(true);
    });
  }, [onSubmit]);

  const closeHandler = () => {
    setHide(true);
    onClose();
  };

  const submitButton = useMemo(() => {
    if (isSaving) {
      return <Loader />;
    }

    if (isSend) {
      return <tdiv>Отправленно</tdiv>;
    }

    return (
      <Button className={style.submit} size={'sm'} onClick={submitHandler}>
        Отправить
      </Button>
    );
  }, [isSaving, isSend, submitHandler]);

  return (
    <tdiv className={cn(style.formWrapper, {[style.hide]: isHide, [style.show]: isShow})}>
      <tdiv className={style.form}>
        <tdiv className={style.fields}>{children}</tdiv>
        <tdiv className={style.send}>{submitButton}</tdiv>
      </tdiv>
      <div className={cn(style.close, closeIcon.style)} onClick={closeHandler} />
    </tdiv>
  );
};
