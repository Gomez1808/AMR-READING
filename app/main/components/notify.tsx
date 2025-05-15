import {
    Flex,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react"
import { ItemContent } from "web/components/menu/ItemContent"
import { MdNotificationsNone } from "react-icons/md"

import DashboardPageController from "../../../../service/controller/page/dashboard_page_controller"

type NotifyModel = {
    controller: DashboardPageController
}

const NotifyButton = ({ controller } : NotifyModel) => {
    const navbarIcon = useColorModeValue('gray.400', 'white');
    let menuBg = useColorModeValue('white', 'navy.800');
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const textColorBrand = useColorModeValue('brand.700', 'brand.400');
    const shadow = useColorModeValue(
        '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
        '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
    );

    return (
        <Menu>
            <MenuButton p='0px'>
                <Icon mt='6px' as={MdNotificationsNone} color={navbarIcon} w='18px' h='18px' me='10px' />
            </MenuButton>
            <MenuList
                boxShadow={shadow}
                p='20px'
                borderRadius='20px'
                bg={menuBg}
                border='none'
                mt='22px'
                me={{ base: '30px', md: 'unset' }}
                minW={{ base: 'unset', md: '400px', xl: '450px' }}
                maxW={{ base: '360px', md: 'unset' }}>
                <Flex w='100%' mb='20px'>
                    <Text fontSize='md' fontWeight='600' color={textColor}>
                        Notifications
                    </Text>
                    <Text fontSize='sm' fontWeight='500' color={textColorBrand} ms='auto' cursor='pointer'>
                        Mark all read
                    </Text>
                </Flex>
                <Flex flexDirection='column'>
                    <MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} px='0' borderRadius='8px' mb='10px'>
                        <ItemContent info='Horizon UI Dashboard PRO' />
                    </MenuItem>
                    <MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} px='0' borderRadius='8px' mb='10px'>
                        <ItemContent info='Horizon Design System Free' />
                    </MenuItem>
                </Flex>
            </MenuList>
        </Menu>
    )
}

export default NotifyButton