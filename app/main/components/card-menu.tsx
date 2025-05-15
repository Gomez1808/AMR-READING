import { Box, Flex, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react"
import DashboardPageController from "../../../../service/controller/page/dashboard_page_controller"

type CardMenuModel = {
    controller: DashboardPageController,
    icon: any,
    text: string,
    index: number
}

const CardMenu = ({ controller, icon, text, index }: CardMenuModel) => {
    let activeColor = useColorModeValue('gray.700', 'white')
    let inactiveColor = useColorModeValue(
        'secondaryGray.600',
        'secondaryGray.600'
    )
    let activeIcon = useColorModeValue('brand.500', 'white')
    let textColor = useColorModeValue('secondaryGray.500', 'white')
    let brandColor = useColorModeValue('brand.500', 'brand.400')

    return (

        <Link key={index} href={`#${text.toLowerCase()}`} onClick={() => controller.changePageIndex(index)}>
            <Box>
                    <HStack
                        spacing={controller.pageIndex === index ? '22px' : '26px'}
                        py='5px'
                        ps='10px'
                    >
                        <Flex w='100%' alignItems='center' justifyContent='center'>
                            <Box
                                color={
                                    controller.pageIndex === index
                                        ? activeIcon
                                        : textColor
                                }
                                me='18px'
                            >
                                {icon}
                            </Box>
                            <Text
                                me='auto'
                                color={
                                    controller.pageIndex === index
                                        ? activeColor
                                        : textColor
                                }
                                fontWeight={
                                    controller.pageIndex === index
                                        ? 'bold'
                                        : 'normal'
                                }
                            >
                                {text}
                            </Text>
                        </Flex>
                        <Box
                            h='36px'
                            w='4px'
                            bg={
                                controller.pageIndex === index
                                    ? brandColor
                                    : 'transparent'
                            }
                            borderRadius='5px'
                        />
                    </HStack>
                </Box>
        </Link>
    )
}

export default CardMenu