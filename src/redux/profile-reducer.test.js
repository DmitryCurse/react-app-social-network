import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "Squeak", likesCount: 999},
        {id: 3, message: "Who am i?", likesCount: 0},
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("osel is a donkey")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(4)
});

test('message of newPost should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("osel is a donkey")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[3].message).toBe('osel is a donkey')
});

test('after deleting length of messages should me decrement', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(2)
});

test(`after deleting length of messages shouldn't be changed if id is incorrect  `, () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
});

