import { Portal, Box, useDisclosure } from '@chakra-ui/react'
import Footer from './footer'

import { SidebarContext } from 'web/contexts/SidebarContext'
import { PropsWithChildren, useState } from 'react'

import Sidebar from './sidebar'
import Header from './header'
import DashboardPageController from '../../../../service/controller/page/dashboard_page_controller'

interface DashboardLayoutProps extends PropsWithChildren {
  controller: DashboardPageController,
  [x: string]: any
}

export default function AdminLayout(props: DashboardLayoutProps) {
  const { children, controller, ...rest } = props

  const [fixed] = useState(false)
  const [toggleSidebar, setToggleSidebar] = useState(false)

  const { onOpen } = useDisclosure()

  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar
        }}
      >
        <Sidebar controller={controller} />
        <Box
          float='right'
          minHeight='100vh'
          height='100%'
          overflow='auto'
          position='relative'
          maxHeight='100%'
          w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration='.2s, .2s, .35s'
          transitionProperty='top, bottom, width'
          transitionTimingFunction='linear, linear, ease'
        >
          <Portal>
            <Box>
              <Header
                controller={controller}
                onOpen={onOpen}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          <Box
            mx='auto'
            p={{ base: '20px', md: '30px' }}
            pe='20px'
            minH='100vh'
            pt='50px'
          >
            {children}
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  )
}
