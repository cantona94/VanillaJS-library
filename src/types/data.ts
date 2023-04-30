import { FavoritesView } from '../views/favorites/favorites';

export interface IRoutes {
	path: string;
	view: typeof FavoritesView;
}

export interface IAppState {
	favorites: string[];
} 

export interface IState {
	list:  string[] ,
	numFound: number,
	loading: boolean,
	searchQuery: string | undefined,
	offset: number
}

export interface ICurrentView {
	destroy(): void,
	render(): void,
}

// export type ICard = {
//     author_facet: string[],
//     author_key: string[],
//     author_name: string[],
//     ebook_access: string,
//     ebook_count_i: number,
//     edition_count: number,
//     edition_key: string[],
//     first_publish_year: number,
//     has_fulltext: boolean,
//     isbn: string[],
//     key: string,
//     language: string[],
//     last_modified_i: number,
//     public_scan_b: boolean,
//     publish_date: string[],
//     publish_year: number[],
//     publisher: string[],
//     publisher_facet: string[],
//     seed: string[],
//     title: string,
//     title_sort: string,
//     title_suggest: string,
//     type: string, 
//     _version_: number,
// 	subject: string[],
// 	cover_edition_key: string,
// }
