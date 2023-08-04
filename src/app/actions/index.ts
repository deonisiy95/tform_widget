import Api from 'src/core/utils/api';

export const submitForm = (widgetId: string, data: TMessage) => {
  Api.send(`widgets/form/${widgetId}/message`, 'POST', {data})
    .then(result => console.log(result))
    .catch(error => console.error('Error add message', error));
};
