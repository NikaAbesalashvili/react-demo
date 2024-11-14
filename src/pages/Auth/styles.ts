import styled, { css } from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
`;

export const AuthBox = styled.div`
    width: 400px;
    padding: 2rem;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
`;

export const Title = styled.h2`
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    color: #333;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
`;

type ButtonProps = {
    variant?: string;
};

export const Button = styled.button<ButtonProps>`
    width: 100%;
    padding: .75rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color .3s ease-in-out;

    ${(props) =>
        props.variant === 'plain' ? 
            css`
                margin-top: 1rem;
                background-color: transparent;
                color: #007bff;
                border: none;
                padding: 0.5rem;
                width: auto;
                font-size: 0.875rem;
                text-decoration: underline;
                
                /* &:hover {
                    color: #fff;
                } */
            `
            : css`
                background-color: #007bff;
                color: #fff;

                &:hover {
                    background-color: #0056b3;
                }
            ` 
    }
`;