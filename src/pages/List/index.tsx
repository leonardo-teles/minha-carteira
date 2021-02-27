import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';

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

            <Content>
                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard 
                    cardColor="#313862" 
                    tagColor="#E44C4E" 
                    title="Conta de Luz"
                    subtitle="27/02/2021"
                    amount="R$ 130,00"
                />

            </Content>
        </Container>
    );
}

export default List;