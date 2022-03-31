import { html, LitElement } from "lit-element";
import { spacing } from "../styles/spacing";
import { card } from "../styles/card";
import './PokGridItem';

export class PokGrid extends LitElement{

    static get styles(){
        return[
            spacing,
            card
        ]
    }

    static get properties(){
        return{
            categorys: {type: Array},
            species: {type: Array}
        }
    }

    constructor(){
        super()
        this.categorys = [];
        this.species = [];
    }

    render(){
        return html`
        
            <div class="mrt-2 card">

                <pok-grid-item
                    idItem=${this.categorys.id}
                    title=${this.categorys.name}
                    sprites=${this.categorys.sprites}
                    infoSpecies=${this.species.flavor_text}
                ></pok-grid-item>

                <p class="mrt-2">Lista de movimientos:</p>
                <ul class="list">
                    ${this.categorys.moves.map(item => html`
                        <li class="list-item">${item.move.name}</li>
                    `)}
                </ul>

            </div>

        `
    }

}

customElements.define("pok-grid", PokGrid);