import React from 'react'

import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  useColorMode
} from '@chakra-ui/react'

import {
  MdGroup,
  MdHome,
  MdSchool,
  MdReceiptLong,
  MdAllInbox,
  MdGradient,
  MdDashboard
} from 'react-icons/md'

import {
  renderThumb,
  renderTrack,
  renderView
} from 'web/components/scrollbar/Scrollbar'

import { Scrollbars } from 'react-custom-scrollbars-2'

import { IoMenuOutline } from 'react-icons/io5'
import { isWindowAvailable } from 'web/utils/navigation'
import { HSeparator } from 'web/components/separator/Separator'

import DashboardPageController from '../../../../service/controller/page/dashboard_page_controller'
import CardMenu from './card-menu'
import NextImage from 'next/image';

type SidebarModel = {
  controller: DashboardPageController,
}

function Sidebar({ controller }: SidebarModel) {
  const { colorMode, toggleColorMode } = useColorMode()

  let variantChange = '0.2s linear'
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  )

  let sidebarBg = useColorModeValue('white', 'navy.800')
  let sidebarMargins = '0px'
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Box display={{ sm: 'none', xl: 'block' }} position='fixed' minH='100%'>
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w='270px'
        h='95vh'
        m={sidebarMargins}
        mx='20px'
        my='20px'
        minH='100%'
        overflowX='hidden'
        boxShadow={shadow}
        backgroundPosition='center'
        backgroundSize='cover'
        borderRadius='16px'
        borderStyle='solid'
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
            {/* <Flex alignItems='center' flexDirection='column'>
              <NextImage
                height={'50px'}
                width={'200px'}
                src={colorMode === 'light' ? '/img/logo/logo_landscape.png' : '/img/logo/logo_landscape_white.png'}
                alt={'logo'}
                color={logoColor}
                style={{
                  marginRight: '32px',
                  marginLeft: '-4px',
                }}
              />
              <HSeparator mb='20px' mt='30px' />
            </Flex> */}
            <Stack direction='column' mt='8px' mb='auto'>
              <Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
                <CardMenu
                  controller={controller}
                  icon={<Icon as={MdDashboard} width='20px' height='20px' color='inherit' />}
                  text={'Dashboard'}
                  index={0}
                />
                <CardMenu
                  controller={controller}
                  icon={<Icon as={MdGradient} width='20px' height='20px' color='inherit' />}
                  text={'Kategori'}
                  index={1}
                />
              </Box>
            </Stack>
          </Flex>
        </Scrollbars>
      </Box>
    </Box>
  )
}

export function SidebarResponsive({ controller }: SidebarModel) {
  const { colorMode, toggleColorMode } = useColorMode()

  let sidebarBackgroundColor = useColorModeValue('white', 'navy.800')
  let menuColor = useColorModeValue('gray.400', 'white')
  let logoColor = useColorModeValue('navy.700', 'white');

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems='center'>
      <Flex ref={btnRef} w='max-content' h='max-content' onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          my='auto'
          w='20px'
          h='20px'
          me='10px'
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={
          isWindowAvailable() && window.document.documentElement.dir === 'rtl'
            ? 'right'
            : 'left'
        }
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w='285px' maxW='285px' bg={sidebarBackgroundColor}>
          <DrawerCloseButton
            zIndex='3'
            onClick={onClose}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody maxW='285px' px='0rem' pb='0'>
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
                <Flex alignItems='center' flexDirection='column'>
                  <NextImage
                    height={'50px'}
                    width={'200px'}
                    src={colorMode === 'light' ? '/img/logo/logo_landscape.png' : '/img/logo/logo_landscape_white.png'}
                    alt={'logo'}
                    color={logoColor}
                    style={{
                      marginRight: '32px',
                      marginLeft: '-4px',
                    }}
                  />
                  <HSeparator mb='20px' mt='30px' />
                </Flex>
                <Stack direction='column' mt='8px' mb='auto'>
                  <Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
                    <CardMenu
                      controller={controller}
                      icon={<Icon as={MdDashboard} width='20px' height='20px' color='inherit' />}
                      text={'Dashboard'}
                      index={0}
                    />
                    <CardMenu
                      controller={controller}
                      icon={<Icon as={MdGradient} width='20px' height='20px' color='inherit' />}
                      text={'Kategori'}
                      index={1}
                    />
                  </Box>
                </Stack>
              </Flex>
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Sidebar
