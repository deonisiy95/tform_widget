import {HTMLAttributes} from 'preact/src/jsx';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        tdiv: HTMLAttributes<HTMLDivElement>;
      }
    }
  }
}
