import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

const List: React.FC = () => {

    const options = [
        {value: 'Leonardo', label: 'Leonardo'},
        {value: 'Manuela', label: 'Manuela'},
        {value: 'Shirlei', label: 'Shirlei'}
    ];

    return (
        <Container>
            <ContentHeader title="Saída" lineColor="#E44C4E">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}

export default List;