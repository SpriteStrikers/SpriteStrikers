import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        chronicles: "CHRONICLES",
        bestiary: "BESTIARY",
        maps: "MAPS",
        legends: "LEGENDS",
        play_now: "PLAY NOW"
      },
      hero: {
        title: "PIXEL CARDS, INFINITE TACTICS",
        subtitle: "Collect ancient spirits, forge your deck, and conquer the Wooden Realm in the ultimate retro-modern card battle experience."
      },
      ticker: {
        status: "FOREST_STATUS: THRIVING",
        deck: "ANCIENT_DECK: LOADED",
        travelers: "ACTIVE_TRAVELERS: 12,482",
        mana: "MANA_SAP: STABLE"
      },
      chronicles: {
        title: "THE ANCIENT CHRONICLES",
        subtitle: "Volume I: The Sprouting Era",
        first_strike: "The First Strike",
        history: "Before the age of the Great Drought, the forest was a sanctuary of infinite mana. The scrolls speak of the First Strike—a card battle that lasted seven moons and shaped the very roots of our world.",
        era1: "The Era of Saplings",
        era2: "The Shadow Rot War",
        era3: "Rise of the Card Lords",
        scribe: "Scribe New Entry"
      },
      bestiary: {
        title: "FOREST BESTIARY",
        subtitle: "Classified Spirits and Entities"
      },
      footer: {
        rights: "ALL RIGHTS RESERVED.",
        motto: "PIXELS BY HAND. TACTICS BY COLD LOGIC."
      }
    }
  },
  es: {
    translation: {
      nav: {
        chronicles: "CRÓNICAS",
        bestiary: "BESTIARIO",
        maps: "MAPAS",
        legends: "LEYENDAS",
        play_now: "JUGAR AHORA"
      },
      hero: {
        title: "CARTAS PIXEL, TÁCTICA INFINITA",
        subtitle: "Colecciona espíritus antiguos, forja tu mazo y conquista el Reino de Madera en la experiencia definitiva de batallas de cartas retro-modernas."
      },
      ticker: {
        status: "ESTADO_BOSQUE: FLORECIENTE",
        deck: "MAZO_ANCESTRAL: CARGADO",
        travelers: "VIAJEROS_ACTIVOS: 12,482",
        mana: "SABIA_MANA: ESTABLE"
      },
      chronicles: {
        title: "LAS CRÓNICAS ANTIGUAS",
        subtitle: "Volumen I: La Era del Brote",
        first_strike: "El Primer Golpe",
        history: "Antes de la era de la Gran Sequía, el bosque era un santuario de maná infinito. Los pergaminos hablan del Primer Golpe, una batalla de cartas que duró siete lunas y dio forma a las raíces mismas de nuestro mundo.",
        era1: "La Era de los Retoños",
        era2: "La Guerra de la Podredumbre",
        era3: "El Ascenso de los Señores de Cartas",
        scribe: "Escribir Nueva Entrada"
      },
      bestiary: {
        title: "BESTIARIO DEL BOSQUE",
        subtitle: "Espíritus y Entidades Clasificadas"
      },
      footer: {
        rights: "TODOS LOS DERECHOS RESERVADOS.",
        motto: "PIXELES A MANO. TÁCTICA POR LÓGICA FRÍA."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
