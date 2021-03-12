import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';

import { Container, ChartContainer, Header, SubtitleContainer, Subtitle } from './styles';

interface IHistoryBox {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBox> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>

            <SubtitleContainer>
                <Subtitle color={lineColorAmountEntry}>
                    <div>30%</div>    
                    <span>Entradas</span>
                </Subtitle>

                <Subtitle color={lineColorAmountOutput}>
                    <div>30%</div>    
                    <span>Saídas</span>
                </Subtitle>
            </SubtitleContainer>


        </Header>

        <ChartContainer>        
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                    
                    <XAxis dataKey="month" stroke="#cecece" />
                    
                    <Tooltip />

                    <Line 
                        type="monotone"
                        dataKey="amountEntry"
                        name="Entradas"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />

                    <Line 
                        type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={lineColorAmountOutput}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />

                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>

    </Container>    
)

export default HistoryBox;