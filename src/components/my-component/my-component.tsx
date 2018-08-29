import { Component } from '@stencil/core';

import '../../../non-stencil-components/my-vanilla-element';
import '../../../non-stencil-components/my-vanilla-element-with-shadowdom';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <div>
        <div>Let's illustrate the bug with a quick example:</div>
        <div><my-vanilla-element></my-vanilla-element></div>   
        <div><my-vanilla-element-with-shadowdom></my-vanilla-element-with-shadowdom></div>
      </div>
    );
  }
}
