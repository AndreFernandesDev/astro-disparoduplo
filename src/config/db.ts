const url = 'https://disparoduplo-cms-jxq6jwbz6a-nw.a.run.app/graphql';

const config = (query: string, variables: object) => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	};
};

const fetchData = async (query: string, variables = {}) => {
	const response = await fetch(url, config(query, variables));
	const data = await response.json();

	return { ...data };
};

// Queries
enum Query {
	all = 'all',
	one = 'one',
}

interface QueryProps {
	id?: string;
}

const query = (type: Query, props: QueryProps = {}) => {
	const queries = {
		all: `
			query {
				albums {
					id
					name
					date
					location
					password
					description
					featured {
						id
						path
					}
					media {
						id
						name
						type
						path
						featured
					}
				}
			}
		`,
		one: `
			query {
				album (id: ${props.id ? `"${props.id}"` : ''}) {
					id
					name
					date
					location
					password
					description
					featured {
						id
						path
					}
					media {
						id
						name
						type
						path
						featured
					}
				}
			}
		`,
	};

	return queries[type];
};

// Mutations
enum MutationTypes {
	album = 'album',
	media = 'media',
}

enum MutationActions {
	add = 'add',
	delete = 'delete',
	update = 'update',
}

const mutations = (type: MutationTypes, action: MutationActions) => {
	const mutations = {
		album: {
			add: `
				mutation (
					$name: String!
					$date: Float!
					$location: String!
					$description: String!
					$password: String!
				) {
					addAlbum(
						name: $name
						date: $date
						location: $location
						description: $description
						password: $password
					) {
						id
						name
						date
						location
						description
						password
					}
				}
			`,
			delete: `
				mutation ($id: ID!) {
					deleteAlbum(id: $id) {
						id
						name
					}
				}
			`,
			update: `
				mutation (
					$id: ID!
					$name: String!
					$date: Float!
					$location: String!
					$description: String!
					$password: String!
				) {
					updateAlbum(
						id: $id
						name: $name
						date: $date
						location: $location
						description: $description
						password: $password
					) {
						id
						name
						date
						location
						description
						password
					}
				}
			`,
		},
		media: {
			add: `
				mutation (
					$featured: Boolean!
					$albumId: String!
					$name: String!
					$type: String!
					$path: String!
				) {
					addMedia(
						featured: $featured
						albumId: $albumId
						name: $name
						type: $type
						path: $path
					) {
						id
						name
						type
						path
						featured
					}
				}
			`,
			delete: `
				mutation ($id: ID!) {
					deleteMedia(id: $id) {
						id
						name
					}
				}
			`,
			update: `
				mutation (
					$id: ID!
					$oldFeaturedId: ID!
				) {
					updateMedia(
						id: $id
						oldFeaturedId: $oldFeaturedId
					) {
						id
					}
				}
			`,
		},
	};

	return mutations[type][action];
};

// Exports
const LocalGetAlbums = async () => {
	const response = await fetchData(query(Query.all));
	return response.data.albums;
};

const localAlbums = await LocalGetAlbums();
const localPaths = localAlbums.map((album) => {
	return { params: { id: album.id } };
});

export const GetAlbums = LocalGetAlbums;
export const albums = localAlbums;
export const paths = localPaths;

export const GetAlbum = async (id: string) => {
	const queryAlbum = query(Query.one, { id: id });
	const response = await fetchData(queryAlbum);
	return response.data.album;
};
