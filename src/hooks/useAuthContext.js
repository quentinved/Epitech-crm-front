import { useContext } from 'react';
import { AuthContext } from '../aws/AuthContext';

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContext');
    }

    return context;
}