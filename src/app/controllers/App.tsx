import {h} from 'preact';
import {useEffect, useState} from 'preact/compat';
import Api from 'src/core/utils/api';
import {AppComponent} from 'src/app/components/App';
import asyncJSON from 'src/core/utils/asyncJSON';

interface IProps {
  widgetId: string;
}

export default function App({widgetId}: IProps) {
  const [form, setForm] = useState(null);
  const [label, setLabel] = useState<TLabel>(null);

  useEffect(() => {
    Api.send<IFormData>(`widgets/form/${widgetId}`)
      .then(result => {
        setLabel(result?.label);

        return asyncJSON.parse(result?.config || '');
      })
      .then(form => setForm(form))
      .catch(error => console.error('Error load form config', error));
  }, []);

  if (!form) {
    return null;
  }

  return <AppComponent form={form} label={label} />;
}
