import { html, LitElement } from 'lit-element';
import { GetPokemon } from './helpers/getPokemon';
import { spacing } from './styles/spacing';
import { main } from './styles/main';
import './components/AddCategory';
import './components/PokGrid';
import './components/ShowErr';

export class PokedexApp extends LitElement{

    static get styles(){
        return [
            main,
            spacing
        ]
    }
    
    get grid(){
        
    }

    static get properties(){
        return{
            _getPokemon: {type: Object},
            errorModal: {type: Object},
            categorys: {type: Array},
            species: {type: Array}
        }
    }

    constructor(){
        super()
        this._getPokemon = new GetPokemon;
        this.categorys = [];
        this.species = [];
        this.errorModal = {};
    }

    _showModalError(configError){
        console.log(configError);
    }

    _setInfo(data){
        this.species = data.detail.info;
    }

    _setPost(data){
        this.categorys = data.detail;
    }

    handleChange(e){
        this._getPokemon.addEventListener("success-call", this._setPost.bind(this));
        this._getPokemon.addEventListener("error-call", this._showModalError.bind(this));
        this._getPokemon.addEventListener("species-call", this._setInfo.bind(this));
        this._getPokemon.getPokemons(e.detail);
    }

    render(){
        return html`

            <main>
                <h1 class="mrt-2">PokedexApp</h1>
    
                <add-category @data-submit="${this.handleChange}"></add-category>

                <div>

                    ${this.categorys >= 0 ? html`
                        <div class="mrt-2">
                            <h2>Busca un pokemon</h2>
                        </div>
                    ` : html`<pok-grid .categorys=${this.categorys} .species=${this.species}></pok-grid>` }

                </div>

            </main>
        
        `
    }
    
}

customElements.define('pokedex-app', PokedexApp);