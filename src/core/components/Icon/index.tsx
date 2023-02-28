import {h} from 'preact';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  type: string;
  className?: string;
  onClick?: () => void;
}

export default function Icon({type, className, onClick}: IProps) {
  return <tdiv className={cn(style.icon, style[type], className)} onClick={onClick} />;
}
