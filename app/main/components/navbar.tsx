import {
	Button,
	Flex,
	Icon,
	useColorModeValue,
	useColorMode
} from '@chakra-ui/react';

import React from 'react';

import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { SearchBar } from './search';
import { SidebarResponsive } from './sidebar';
import DashboardPageController from '../../../../service/controller/page/dashboard_page_controller';
import NotifyButton from './notify';
import UserAvatar from './user';

type NavbarModel = {
	controller: DashboardPageController
}

 const Navbar = ({ controller } : NavbarModel) => {
	const { colorMode, toggleColorMode } = useColorMode();

	const navbarIcon = useColorModeValue('gray.400', 'white');
	let menuBg = useColorModeValue('white', 'navy.800');
	const shadow = useColorModeValue(
		'14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
		'14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
	);

	return (
		<Flex
			w={{ sm: '100%', md: 'auto' }}
			alignItems='center'
			flexDirection='row'
			bg={menuBg}
			flexWrap={{ base: 'wrap', md: 'nowrap' }}
			p='10px'
			borderRadius='30px'
			boxShadow={shadow}>
			<SearchBar
				mb={() => {
					return { base: '10px', md: 'unset' };
				}}
				me='10px'
				borderRadius='30px'
			/>
			<SidebarResponsive controller={controller} />
			<NotifyButton controller={controller} />
			<Button
				variant='no-hover'
				bg='transparent'
				p='0px'
				minW='unset'
				minH='unset'
				h='18px'
				w='max-content'
				onClick={toggleColorMode}>
				<Icon
					me='10px'
					h='18px'
					w='18px'
					color={navbarIcon}
					as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
				/>
			</Button>
			<UserAvatar controller={controller}/>
		</Flex>
	);
}

export default Navbar
