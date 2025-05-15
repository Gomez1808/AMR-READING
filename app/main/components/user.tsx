import {
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    Flex,
    Text,
    MenuItem,
    useColorMode,
    useColorModeValue,
    Icon
} from "@chakra-ui/react"

import DashboardPageController from "../../../../service/controller/page/dashboard_page_controller"
import Router from "next/router"
import { basicSuccessToast } from "../../../../service/service/toast/basic"
import { MdOutlinePermIdentity } from "react-icons/md"

type UserDataModel = {
    controller: DashboardPageController
}

const UserAvatar = ({ controller }: UserDataModel) => {
    const { colorMode, toggleColorMode } = useColorMode();

    let menuBg = useColorModeValue('white', 'navy.800');
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
    const shadow = useColorModeValue(
        '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
        '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
    );

    const signOut = async () => {
        var mode = colorMode === 'light' ? 'light' : 'dark'

        await controller.signOut()
        basicSuccessToast('Sign Out Success!', mode)

        Router.push('/sign-in')
    }

    return (
        <Menu>
            <MenuButton p='0px'>
                <Avatar
                    _hover={{ cursor: 'pointer' }}
                    color='white'
                    name='Adela Parkson'
                    bg='white'
                    size='sm'
                    w='40px'
                    h='40px'
                    shadow={shadow}
                    sx={{
                        textAlign: "center"
                    }}
                >
                    <Flex justifyContent='center'>
                        <Icon as={MdOutlinePermIdentity} width='20px' height='20px' color='black' />
                    </Flex>
                </Avatar>
            </MenuButton>
            <MenuList boxShadow={shadow} p='0px' mt='10px' borderRadius='20px' bg={menuBg} border='none'>
                <Flex w='100%' mb='0px'>
                    <Text
                        ps='20px'
                        pt='16px'
                        pb='10px'
                        w='100%'
                        borderBottom='1px solid'
                        borderColor={borderColor}
                        fontSize='sm'
                        fontWeight='700'
                        color={textColor}>
                        👋&nbsp; Hey, {controller.user.nameUser}
                    </Text>
                </Flex>
                <Flex flexDirection='column' p='10px'>
                    <MenuItem
                        _hover={{ bg: 'none' }}
                        _focus={{ bg: 'none' }}
                        borderRadius='8px'
                        px='14px'
                    >
                        <Text fontSize='sm'>Profile Settings</Text>
                    </MenuItem>
                    <MenuItem
                        _hover={{ bg: 'none' }}
                        _focus={{ bg: 'none' }}
                        color='red.400'
                        borderRadius='8px'
                        px='14px'
                        onClick={signOut}
                    >
                        <Text fontSize='sm'>Log out</Text>
                    </MenuItem>
                </Flex>
            </MenuList>
        </Menu>
    )
}

export default UserAvatar