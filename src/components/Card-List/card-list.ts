import { DivComponent } from '../../common/div-component';
import { Card } from '../Card/card';
import './card-list.css';
import { IAppState } from '../../types/data';


export class CardList extends DivComponent {
    appState: IAppState;
    parentState: any;
    constructor(appState: IAppState, parentState: any) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = `<div class="card_list__loader">Загрузка...</div>`;
            return this.el;
        }
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card_grid');
        this.el.append(cardGrid);

        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render());
        }

        return this.el;
    }
}
