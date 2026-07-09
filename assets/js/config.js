javascript
/**
 * Configuração central do Portal Executivo
 * UPA Rocinha
 */

const PORTAL_CONFIG = {

    nome: "Portal Executivo de Gestão",

    unidade: "UPA Rocinha",

    projeto: "Accountability 2026",

    ano: 2026,


    identidade: {

        logo: "assets/images/logo.png",

        capa: "assets/images/capa.jpg",

        favicon: "assets/icons/favicon.ico"

    },


    dados: {

        atendimentos:
        "data/json/atendimentos.json",

        indicadores:
        "data/json/indicadores.json",

        rh:
        "data/json/rh.json"

    },


    sistema: {

        versao: "0.1.0",

        ambiente: "desenvolvimento",

        autor:
        "Portal Executivo de Gestão"

    }

};


// Disponibiliza configuração global

window.PORTAL_CONFIG = PORTAL_CONFIG;


---
