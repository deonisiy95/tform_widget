export const prepareData = (values: TForm): TMessage => {
  const result = [];

  values.forEach(item => {
    if (item.data) {
      result.push(getDataControl(item));
    }
  });

  return result;
};

const getDataControl = (control: TControl): {key: string; value: string} => {
  switch (control.type) {
    case 'select':
      const value = control.value.options[parseInt(control.data, 10)];
      return {key: control.value.title ?? control.type, value};
    case 'input':
      return {key: control.value.title ?? control.type, value: control.data};
    case 'checkbox':
      return {key: control.value.text ?? control.type, value: control.data ? 'yes' : 'no'};
    default:
      return null;
  }
};
