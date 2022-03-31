import { LitElement } from "lit-element";

export class GetPokemon extends LitElement{

    static get properties(){
        return{
            pokemon: {type: String}
        }
    }

    constructor(){
        super()
        this.pokemon = "";
    }

    _handleSuccessSpecies(species){
        const infoPokedex = species.flavor_text_entries;
        const infoLanguage = infoPokedex.find(info => info.language.name === "en" && info.version.name === "red");
        
        this.dispatchEvent(new CustomEvent("species-call", {
            detail:{
                info: infoLanguage
            }
        }));
    }

    _handleSuccessResp(resp){

        const {id, moves, species ,sprites} = resp

        let spritesUrl = sprites.versions["generation-i"]["red-blue"].front_default

        this.dispatchEvent(new CustomEvent('success-call', {
            detail:{
                id: id,
                moves: moves,
                name: species.name,
                species: species,
                sprites: spritesUrl
            }
        }));

    }

    _handleErrorResp(err){
        this.dispatchEvent(new CustomEvent('error-call', alert("Pokemon not found"), {detail: err}));
    }

    getPokemons(search){

        let url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(search)}`;
        let urlSpecies = `https://pokeapi.co/api/v2/pokemon-species/${encodeURI(search)}/`
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {this._handleSuccessResp(resp)})
            .catch(err => {this._handleErrorResp(err)})

        fetch(urlSpecies)
            .then(resp => resp.json())
            .then(species => {this._handleSuccessSpecies(species)})
    }

}

customElements.define("get-pokemon", GetPokemon);