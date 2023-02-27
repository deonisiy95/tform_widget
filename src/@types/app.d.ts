type TForm = Array<TControl>;

type TTypeControl = 'input' | 'text' | 'title' | 'checkbox' | 'select';

type TControl =
  | ITextControl
  | ITitleControl
  | IInputControl
  | ICheckBoxControl
  | ISelectControl;

type TCanRequireControl = IInputControl | ICheckBoxControl;

interface ITextControl {
  type: 'text';
  value: string;
}

interface ITitleControl {
  type: 'title';
  value: string;
}

interface IInputControl {
  type: 'input';
  value: {
    title: string;
    text: string;
    placeholder: string;
    is_require: boolean;
    is_multiline: boolean;
  };
}

interface ISelectControl {
  type: 'select';
  value: {
    title: string;
    text: string;
    options: string[];
    is_require: boolean;
  };
}

interface ICheckBoxControl {
  type: 'checkbox';
  value: {
    text: string;
    is_require: boolean;
  };
}

type IFormData = {
  widgetId: string;
  config: string;
}
