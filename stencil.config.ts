import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mycomponent',
  copy: [
    { 
      src: "../node_modules/@webcomponents/webcomponentsjs/*.js", 
      dest: "node_modules/@webcomponents/webcomponentsjs"
    },
    { 
      src: "../node_modules/@webcomponents/webcomponentsjs/bundles/*", 
      dest: "node_modules/@webcomponents/webcomponentsjs/bundles"
    },
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
