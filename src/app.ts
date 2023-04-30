import { MainView } from './views/main/main';
import { FavoritesView } from './views/favorites/favorites';
import { IRoutes, ICurrentView } from './types/data';

class App {
	currentView: ICurrentView;
	routes = [
		{path: "", view: MainView },
		{path: "#favorites", view: FavoritesView },
	];
    appState = {
		favorites: []
	};

	constructor() {
		window.addEventListener('hashchange', this.route.bind(this));
		this.route();
	}

	route() {
		if (this.currentView) {
			this.currentView.destroy();
		}
		const view = (<IRoutes>this.routes.find(r => r.path == location.hash)).view;
		this.currentView = new view(this.appState);
		this.currentView.render();
	}
}

new App();
