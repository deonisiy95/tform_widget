import {useMemo} from 'preact/compat';
import cn from 'classnames';
import style from 'src/core/components/Icon/style.less';

interface IIcon {
  style: string;
}

export function useIcon(icon: string): IIcon {
  return useMemo(() => {
    return {
      style: cn(style[icon], style.icon)
    };
  }, [icon]);
}
