declare interface Window {
  widgetId: string;
  config: {
    [key: string]: any;
    build_number: number;
  }
}

declare module '*.less' {
  const resource: {[key: string]: string};
  export = resource;
}
