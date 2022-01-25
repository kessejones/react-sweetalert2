import React from 'react';
import SweetAlert2, { withSwal } from '../src';
import Button from './components/Button';
import { render, fireEvent, waitFor, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('SweetAlert2', () => {
    beforeEach(() => {
        cleanup();
    });

    it('should not render sweetalert container', () => {
        const { baseElement } = render(<SweetAlert2 />);
        const swal2Container = baseElement.querySelector('.swal2-container')
        expect(swal2Container).toBeNull();
    });

    it('should render sweetalert container', () => {
        const { baseElement } = render(<SweetAlert2 show={true}/>);
        const swal2Container = baseElement.querySelector('.swal2-container')
        expect(swal2Container).not.toBeNull();
    });

    it('should not render loading spinner', () => {
        const { baseElement } = render(<SweetAlert2 show={true}/>);
        const swal2Loading = baseElement.querySelector('.swal2-loading')
        expect(swal2Loading).toBeNull();
    });

    it('should render loading spinner', () => {
        const { baseElement } = render(<SweetAlert2 show={true} showLoading={true}/>);
        const swal2Loading = baseElement.querySelector('.swal2-loading')
        expect(swal2Loading).not.toBeNull();
    });

    it('should render sweetalert html attribute', () => {
        const { baseElement } = render(<SweetAlert2 show={true} html={"<h1>hello</h1>"}/>);
        const swal2Html = baseElement.querySelector('#swal2-html-container')
        const htmlContent = swal2Html?.querySelector('h1');
        const style = swal2Html?.getAttribute('style');
        expect(style?.includes('display: block')).toBeTruthy();
        expect(htmlContent).not.toBeNull();
    });

    it('should render sweetalert children', () => {
        const { baseElement } = render(
            <SweetAlert2 show={true}>
                <p>hello</p>
            </SweetAlert2>
        );

        const swal2Html = baseElement.querySelector('#swal2-html-container')
        const htmlContent = swal2Html?.querySelector('p');
        const style = swal2Html?.getAttribute('style');
        expect(style?.includes('display: block')).toBeTruthy();
        expect(htmlContent).not.toBeNull();
    });

    it('should call on confirm event when click in confirm', async () => {
        global.scrollTo = jest.fn();
        const onConfirm = jest.fn();

        const { baseElement } = render(
            <SweetAlert2
                show={true} 
                onConfirm={(result: any) => onConfirm(result) } 
            />
        );

        const confirmButton = baseElement.querySelector('.swal2-confirm');
        expect(confirmButton).not.toBeNull();

        fireEvent.click(confirmButton as Element);
        await waitFor(() => !baseElement.querySelector('.swal2-container'))

        expect(onConfirm).toHaveBeenCalled();
    });

    it('should call on resolve event when close swal', async () => {
        global.scrollTo = jest.fn();
        const onResolve = jest.fn();

        const { baseElement } = render(
            <SweetAlert2
                show={true} 
                showCancelButton={true}
                onResolve={() => onResolve() } 
            />
        );

        const cancelButton = baseElement.querySelector('.swal2-cancel');
        expect(cancelButton).not.toBeNull();

        fireEvent.click(cancelButton as Element);
        await waitFor(() => !baseElement.querySelector('.swal2-container'))

        expect(onResolve).toHaveBeenCalled();
    });

    it('should call on error event', async () => {
        global.scrollTo = jest.fn();
        const onError = jest.fn();

        const { baseElement } = render(
            <SweetAlert2
                show={true} 
                onError={() => onError()}
                willOpen={() => {
                    throw new Error('error')
                }} 
            />
        );

        await waitFor(() => !baseElement.querySelector('.swal2-container'))
        expect(onError).toHaveBeenCalled();
    });


    it('should render component using withSwal', () => {
        const SwalButton = withSwal(Button);

        render(<SwalButton text="Hello"/>);
        const swalButtonElement = screen.getByText('Hello');

        expect(swalButtonElement).not.toBeNull();
        expect(swalButtonElement).toHaveTextContent('Hello');
    });

    it('should render swal popup when button clicked', () => {
        const SwalButton = withSwal(Button);

        const { baseElement } = render(<SwalButton text="Hello"/>);
        const swalButtonElement = screen.getByText('Hello');

        fireEvent.click(swalButtonElement);

        const swalContainer = baseElement.querySelector('.swal2-container');
        expect(swalContainer).not.toBeNull();
    });
});
