declare interface Window {
  widgetId: string;
}

declare module '*.less' {
  const resource: {[key: string]: string};
  export = resource;
}
