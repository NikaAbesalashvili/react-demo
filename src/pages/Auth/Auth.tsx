import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { registerUser } from "../../app/thunks/userThunks";
import { AuthContainer, AuthBox, Title, Input, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { Status } from "../../enums";

const Auth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { status } = useAppSelector((state) => state.user);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(registerUser(userData));
    };

    useEffect(() => {
        if (status === Status.Succeeded) navigate('/');
    }, [status, navigate]);

    return (
        <AuthContainer>
            <AuthBox>
                <Title>{isSignIn ? 'Sign In' : 'Sign Up'}</Title>
                <form onSubmit={handleSubmit} >
                    {!isSignIn ? (
                        <Input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                        />
                    ) : (
                        <></>
                    )}
                    <Input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <Button>{isSignIn ? 'Sign In' : 'Sign Up'}</Button>
                </form>
                <Button
                    variant="plain"
                    onClick={() => setIsSignIn((prevState) => !prevState)}
                >
                    {isSignIn ? 'Do not have an account? Sign Up' : 'Already have an account? Sign In'}
                </Button>
            </AuthBox>
      </AuthContainer>
    );
};

export default Auth;
