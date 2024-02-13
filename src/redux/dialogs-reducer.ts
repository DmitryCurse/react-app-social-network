import {InferActionsTypes} from "./redux-store";


type ActionsTypes = InferActionsTypes<typeof actions>
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}


export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: "Lera Ilyina"},
        {id: 2, name: "Alexander Popov"},
        {id: 3, name: "Egor Kiryanov"},
        {id: 4, name: "Max Kozlov"},
        {id: 5, name: "Ilya Efremov"},
        {id: 6, name: "Boris Ilyin"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fine, thank you"},
        {id: 4, message: "Do you like cats?"},
        {id: 5, message: "Yes they are so pretty!"},
    ] as Array<MessageType>
}

let dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/dialogs/SEND_MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'SN/dialogs/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer