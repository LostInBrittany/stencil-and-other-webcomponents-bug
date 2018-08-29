import { LitElement } from '@polymer/lit-element';

class MyLitElement extends LitElement {
    _render() {
        return `<h1>Hello I'm a lit-element based web component`;
    }
}

customElements.define('my-lit-element', MyLitElement);