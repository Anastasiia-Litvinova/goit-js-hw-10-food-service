import refs from './refs';
import cards from './menu.json'
import menuCardsTpl from '../templates/menuCards.hbs';


const markupMenu = menuCardsTpl(cards);
refs.menuRef.insertAdjacentHTML('beforeend', markupMenu);