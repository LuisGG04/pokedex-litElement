import { css } from "lit-element";

export const card = css`
    .card{
        padding-bottom: 20px;
        border: 5px solid #000;
        border-radius: 5px;
        background-color: #5c5c5c;
        color: #fafafa;
    }

    .sprites{
        width: 200px;
        height: 200px;
        display: block;
        border-radius: 10px;
    }

    .container-info{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .container-title{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`