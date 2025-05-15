import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import CategoryFrgamentController from "../../../../../../service/controller/fragment/category_fragment_controller"

import {
    Button,
    Flex,
    Spacer,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue
} from "@chakra-ui/react"
import Card from 'web/components/card/Card'
import { useState } from "react"
import { dateDayFullFormater } from "../../../../../../service/service/formatter/date"
import ConfigButton from "./config_button"

type TableModel = {
    controller: CategoryFrgamentController
}

const TableData = ({ controller }: TableModel) => {
    const textColor = useColorModeValue('secondaryGray.900', 'white')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = controller.dataCategory.slice(startIndex, endIndex);

    const totalPages = Math.ceil(controller.dataCategory.length / itemsPerPage);


    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    return (
        <Card
            flexDirection='column'
            w='100%'
            px='25px'
            overflowX={{ sm: 'scroll', lg: 'hidden' }}
        >
            <Flex justify='space-between' mb='20px' align='center'>
                <Text
                    color={textColor}
                    fontSize='22px'
                    fontWeight='700'
                    lineHeight='100%'
                >
                    Tabel Data Kategori
                </Text>
            </Flex>
            <div style={{ overflowX: "auto" }}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th borderColor={borderColor} isTruncated>No.</Th>
                            <Th borderColor={borderColor} isTruncated>ID Category</Th>
                            <Th borderColor={borderColor} isTruncated>Nama Kategori</Th>
                            <Th borderColor={borderColor} isTruncated>Satuan</Th>
                            <Th borderColor={borderColor} isTruncated>Status</Th>
                            <Th borderColor={borderColor} isTruncated>Waktu</Th>
                            <Th borderColor={borderColor} isTruncated>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            currentItems.map((data, index) => {
                                return (
                                    <Tr key={data.idCategory}>
                                        <Td isTruncated>{index + 1}.</Td>
                                        <Td isTruncated>{data.idCategory}</Td>
                                        <Td isTruncated>{data.nameCategory}</Td>
                                        <Td isTruncated>{data.unitCategory}</Td>
                                        <Td isTruncated>{data.statusCategory ? 'active' : 'non active'}</Td>
                                        <Td isTruncated>{dateDayFullFormater(data.createCategory)}.</Td>
                                        <Td isTruncated>
                                            <ConfigButton controller={controller} data={data} />
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </div>
            <Flex align={'center'} mt={'20px'}>
                <PageButton
                    label="Previous"
                    isEnable={currentPage === 1}
                    icon={<ChevronLeftIcon />}
                    onClick={handlePrevPage} />
                <Spacer />
                <Text
                    color={textColor}
                >
                    {currentPage}
                </Text>
                <Spacer />
                <PageButton
                    label="Next"
                    isEnable={currentPage === totalPages}
                    icon={<ChevronRightIcon />}
                    onClick={handleNextPage} />
            </Flex>
        </Card>
    )
}

type ButtonModel = {
    label: string
    isEnable: boolean
    icon: any
    onClick: () => void
}

const PageButton = ({ label, isEnable, icon, onClick }: ButtonModel) => {
    let bgButton = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
    const shadow = useColorModeValue(
        '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
        '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
    );

    return (
        <Button
            variant='darkBrand'
            _hover={{ bg: 'brand.500' }}
            _focus={{ bg: 'brand.500' }}
            color='white'
            fontSize='sm'
            fontWeight='500'
            borderRadius='70px'
            px='24px'
            py='5px'
            bg={bgButton}
            isDisabled={isEnable}
            leftIcon={label == 'Next' ? null : icon}
            rightIcon={label == 'Next' ? icon : null}
            onClick={onClick}
        >
            {label}
        </Button>
    )
}

export default TableData