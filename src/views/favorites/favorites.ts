import { AbstractView } from '../../common/view';
import onChange from 'on-change';
import { Header } from '../../components/Header/header';
import { CardList } from '../../components/Card-List/card-list';
import { IAppState} from '../../types/data';

export class FavoritesView extends AbstractView {
	appState: IAppState;
	app: HTMLElement;
	constructor(appState: IAppState) {
		super();
		this.appState = appState;
		this.appState = onChange(this.appState, this.appStateHook.bind(this));
		this.setTitle('Мои книги');
	}

	destroy() {
		onChange.unsubscribe(this.appState);
	}

	appStateHook(path: string) {
		if (path === 'favorites') {
			this.render();
		}
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = `
			<h1>Избранное</h1>
		`
		main.append(new CardList(this.appState, { list: this.appState.favorites }).render());
		this.app.innerHTML = '';
		this.app.append(main);
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.appState).render();
		this.app.prepend(header);
	}
}
