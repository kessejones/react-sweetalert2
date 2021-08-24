import React from 'react';
import renderer from 'react-test-renderer';
import SweetAlert2, { withSwal } from '../src';
import Button from './components/Button';

test("should return null when render component", () => {
    const results = renderer.create(<SweetAlert2 />);
    const tree = results.toTree();
    expect(tree?.rendered).toBeNull();
});

test('should exist property swal when using withSwal in a component', () => {
    const SwalButton = withSwal(Button);
    
    const results = renderer.create(<SwalButton />);
    const tree = results.toTree();

    expect(tree?.props.swal).toBeDefined();
});

test('should render a button when wrapping a component with withSwal', () => {
    const SwalButton = withSwal(Button);
    
    const results = renderer.create(<SwalButton />);
    const tree = results.toTree();
    expect(tree?.rendered).not.toBeNull();
});

test('should exist property children of type h1', () => {    
    const results = renderer.create(
        <SweetAlert2>
            <h1>Hello</h1>
        </SweetAlert2>
    );

    const tree = results.toTree();
    expect(tree?.props.children.type).toEqual('h1');
});
