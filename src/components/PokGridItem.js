import { html, LitElement } from 'lit-element';
import { card } from '../styles/card';
import { spacing } from '../styles/spacing';

export class PokGridItem extends LitElement{

    static get styles(){
        return[
            card,
            spacing
        ]
    }

    static get properties(){
        return{
            idItem: {type: Number},
            title: {type: String},
            sprites: {type: String},
            infoSpecies: {type: String}
        }
    }

    constructor(){
        super()
        this.idItem = '';
        this.title = '';
        this.sprites = '';
        this.infoSpecies = '';
    }

    render(){
        return html`
            <div>

                <div class="mrt-2 container-title">
                    <div>
                        <h2>${this.title}</h2>
                        <p>Number pokedex: ${this.idItem} - ${this.title}</p>
                    </div>
                    <img src="${this.sprites}" alt="${this.title}" class="sprites mrt-2">
                </div>

                <div class="container-info">
                    <p class="mrt-2">Información del pokedex: ${this.infoSpecies}</p>
                </div>
            </div>
        `
    }

}

customElements.define('pok-grid-item', PokGridItem);