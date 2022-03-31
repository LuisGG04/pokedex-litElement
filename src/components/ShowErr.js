import { LitElement } from "lit-element";

export class ShowErr extends LitElement{

    static get properties(){
        return{
            err: {type: String}
        }
    }

    constructor(){
        super()
        this.err = "";
    }

    render(){
        return html`
            <div class="mrt-2">
                <h2>${this.err}</h2>
            </div>
        `
    }
}

customElements.define("show-err", ShowErr);