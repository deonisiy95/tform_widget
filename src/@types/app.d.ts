type TForm = Array<TControl>;

type TTypeControl = 'input' | 'text' | 'title' | 'checkbox' | 'select';

type TControl = ITextControl | ITitleControl | IInputControl | ICheckBoxControl | ISelectControl;

type TCanRequireControl = IInputControl | ICheckBoxControl;

interface ITextControl {
  type: 'text';
  value: string;
  data?: string;
}

interface ITitleControl {
  type: 'title';
  value: string;
  data?: string;
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
  data?: string;
}

interface ISelectControl {
  type: 'select';
  value: {
    title: string;
    text: string;
    options: string[];
    is_require: boolean;
  };
  data?: string;
}

interface ICheckBoxControl {
  type: 'checkbox';
  value: {
    text: string;
    is_require: boolean;
  };
  data?: boolean;
}

type TLabel = {
  text?: string;
  icon: string;
  color: string;
};

type IFormData = {
  widgetId: string;
  config: string;
  label: TLabel;
};

type TMessage = Array<{key: string; value: string}>;
