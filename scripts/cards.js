const template = document.createElement('template');
template.innerHTML = 
    `<style>
        .card {
            padding-bottom: 36px;
            border: 3px solid rgb(65, 83, 88);
            border-radius: 10px;
        }
        
        .card-title {
            margin-bottom: 24px;
        }
        
        .card-description,
        .card-title {
            padding-left: 24px;
            padding-right: 24px;
        }
        
        .card-description {
            margin-bottom: 0;
        }
    </style>
    <article class="card">
        <h2 class="card-title">
            <slot name="card-title">
                Card Title
            </slot>
        </h2>
        <p class="card-description">
            <slot name="card-description">
                Vitae, et ut repudiandae similique quas aperiam maiores est perferendis?</p>
            </slot>
    </article>
    `

class archeCard extends HTMLElement {
    constructor() {
    super();
    
    const tempNode = template.content.cloneNode(true)
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(tempNode)
    }
}

customElements.define('arche-card', archeCard);