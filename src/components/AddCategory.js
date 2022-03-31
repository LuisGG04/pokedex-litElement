import { html, LitElement } from 'lit-element';
import { spacing } from '../styles/spacing';

export default class AddCategory extends LitElement{

    static get styles(){
        return spacing
    }

    static get properties(){
        return{
            inputValue: {type: String},
            setCategory: {type: Object}
        }
    }

    constructor(){
        super()
        this.inputValue = ""
        this.setCategory = {}
    }

    handleSubmit(e){
        e.preventDefault();
        this.dispatchEvent(new CustomEvent('data-submit', {
            detail: this.inputValue
        }));
    }

    handleInputChange(e){
        this.inputValue = e.target.value
    }

    render(){

        return html`
        
            <form class="mrt-2" @submit="${this.handleSubmit}">
                <input type="text" value="${this.inputValue}" @change="${this.handleInputChange}">
            </form>

        `
    }

}

customElements.define('add-category', AddCategory);