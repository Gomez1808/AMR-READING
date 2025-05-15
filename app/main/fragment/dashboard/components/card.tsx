// Chakra imports
import { Flex, Stat, StatLabel, StatNumber, useColorModeValue, Text, Icon } from '@chakra-ui/react';
import Card from 'web/components/card/Card';
import DashboardFrgamentController from '../../../../../../service/controller/fragment/dashboard_fragment_controller';
import DataModel from '../../../../../../service/model/data';

type CardModel = {
    controller: DashboardFrgamentController
    label: string
    value: string
    icon: any
    listData: DataModel[]
}

const CardData = ({ controller, label, value, icon, listData }: CardModel) => {
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const textColorSecondary = 'secondaryGray.600';

    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
    const brandColor = useColorModeValue('brand.500', 'white')

    var data = listData.filter((e) => e.idCategory == value)
    data.sort((a, b) => Date.parse(b.createData.toString()) - Date.parse(a.createData.toString()));

    return (
        <Card py='15px'>
            <Flex
                my='auto'
                h='100%'
                align={{ base: 'center', xl: 'center' }}
                justify={{ base: 'center', xl: 'center' }}>

                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'50%'}
                    w='56px'
                    h='56px'
                    bg={boxBg}
                >
                    <Icon
                        w='32px'
                        h='32px'
                        as={icon}
                        color={brandColor}
                    />
                </Flex>

                <Stat my='auto' ms={'18px'}>

                    <StatLabel
                        lineHeight='100%'
                        color={textColorSecondary}
                        fontSize={{
                            base: 'sm'
                        }}>
                        {label}
                    </StatLabel>

                    <StatNumber
                        color={textColor}
                        fontSize={{
                            base: '2xl'
                        }}>
                        {data.length === 0 ? 0 : data[0].valueData}
                    </StatNumber>

                </Stat>
            </Flex>
        </Card>
    );
}

export default CardData