const postReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case "POSTS":
            return { posts: action.payload };
        
        case "CREATE":
            return { posts: [...state.posts, action.payload] };
        
        case "UPDATE":
            return {
                posts: state.posts.map(post => 
                    post._id === action.payload._id ? action.payload : post
                )
            };
        
        case "DELETE":
            return {
                posts: state.posts.filter(post => post._id !== action.payload)
            };
        
        default:
            return state;
    }
};

export default postReducer;
