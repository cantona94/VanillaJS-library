export class AbstractView {
	app: HTMLElement | null;
	constructor() {
		this.app = document.getElementById('root');
	}

	setTitle(title: string) {
		document.title = title;
	}

	render() {
		return;
	}

	destroy() {
		return;
	}
}