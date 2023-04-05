import dialogsReducer, {sendMessageCreator} from "./dialogs-reducer";

let state = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: " I'm fine"},
    ],
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Svetlana"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ]
}

test('length of messages should be added', () => {
    // 1. test data
    let action = sendMessageCreator("osel is a donkey")
    // 2. action
    let newState = dialogsReducer(state, action)
    // 3. expectation
    expect(newState.messages.length).toBe(4)
});