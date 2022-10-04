export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // token: null
    // token:"BQDVXufE5XMfbKvpB3Bhn8XjEIeOHMrDhJq4Ma5RR3JF7CTxmgGHPNxiAdNFHIldXyzVz3wASYcGZtcToaUZN7qQyudmwtj3b6ImEcsdpP6QqsnHfPcCwEj9nbkUZjGNKAhmC9kwIyQGtJ3iWq1Fgyyek_ZUUxN90XS4RiLezEeaN4HBwclYGtaCd0lJqB-6n-nUPopldMk0e0eRIKYJtG-n"
};

const reducer = (state,action) => {
    // Action -> type ,[payload]
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }

};

export default reducer