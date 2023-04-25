import Api from 'src/core/utils/api';

export const submitForm = (widgetId: string, data: TRecord) => {
  Api.send(`widgets/form/${widgetId}/record`, 'POST', {data})
    .then(result => console.log(result))
    .catch(error => console.error('Error add record', error));
};
