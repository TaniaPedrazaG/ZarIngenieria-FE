import { FC, PropsWithChildren, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
};

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toogleSideMenu = () => {
        dispatch({ type: '[UI] - ToggleMenu' });
    };
    return (
        <UiContext.Provider value={{ ...state, toogleSideMenu }}>
        {children}
        </UiContext.Provider>
    );
};
