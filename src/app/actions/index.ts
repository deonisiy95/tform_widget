import Api from 'src/core/utils/api';
import asyncJSON from 'src/core/utils/asyncJSON';

export const submitForm = (widgetId: string) => {
  Api.send<any>(`widgets/form/${widgetId}`)
    .then(result => asyncJSON.parse(result?.config || ''))
    .then(form => console.log(form))
    .catch(error => console.error('Error load form config', error));
}
