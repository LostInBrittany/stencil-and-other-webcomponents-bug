class MyVanillaElement extends HTMLElement {
    connectedCallback() {
        let tmpl = document.createElement('template');
        tmpl.innerHTML = `<h1>I'm a vanilla custom element without Shadow DOM</h1>`;
        this.appendChild(tmpl.content.cloneNode(true));
    }
}
customElements.define('my-vanilla-element', MyVanillaElement);