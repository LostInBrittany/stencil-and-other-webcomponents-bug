class MyVanillaElementWithSadowDom extends HTMLElement {
    connectedCallback() {
        let tmpl = document.createElement('template');
        tmpl.innerHTML = `<h1>I'm a vanilla custom element with Shadow DOM</h1>`;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        console.log('shadowRoot', shadowRoot);
    }
}
customElements.define('my-vanilla-element-with-shadowdom', MyVanillaElementWithSadowDom);