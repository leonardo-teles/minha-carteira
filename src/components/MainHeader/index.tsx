import React, {useMemo} from 'react';

import emojis from '../../utils/emojis';
import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        
        return emojis[indice];
    }, []);

    return (
        <Container>
            <h3>Toogle</h3>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Leonardo Almeida</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;