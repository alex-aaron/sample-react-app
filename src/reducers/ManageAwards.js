export default function manageAwards(state = {
    awards: []
}, action) {
   switch (action.type) {

    case 'ADD_AWARD':

    let post = {
        year: action.post.year,
        title: action.post.title,
        text: action.post.text
    }
    return { ...state, posts: [...state.posts, post] };
   }
}