import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='profile status test1'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("profile status test1");
    });

    test("after creation span should be displayed", () => { //with correct status
        const component = create(<ProfileStatus status='profile status test2'/>);
        const root = component.root
        expect(() => {
            expect(div).not.toBeNull()
        }).toThrow()
    });

    test("after creation <span> should contains correct status",   () => {
        const component = create(<ProfileStatus status='profile status test3'/>);
        const root = component.root
        let div = root.findByType("div")
        expect(div.children[0]).toBe("profile status test3");
    });

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status='profile status test4'/>);
        const root = component.root
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });

    test("input should be displayed in edit mode instead of span",() => {
        const component = create(<ProfileStatus status='profile status test5'/>);
        const root = component.root
        let div = root.findByType('div')
        div.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('profile status test5');
    });

    test("callback should be called",() => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='profile status test6' updateStatus={mockCallback} />);
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});