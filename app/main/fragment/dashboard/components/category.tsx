import {
    Flex,
    Icon,
    Select,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"

import DashboardFrgamentController from "../../../../../../service/controller/fragment/dashboard_fragment_controller"

import { useState } from "react"
import { setRecoil } from "recoil-nexus"

import SubmitButton from "./submit"
import { useDelay } from "../../../../../../service/service/function/delay"

type ComponentModel = {
    controller: DashboardFrgamentController
}

const CategoryConfig = ({ controller }: ComponentModel) => {
    const [firstCategory, setFirstCategory] = useState("")
    const [secondCategory, setSecondCategory] = useState("")
    const [thirdCategory, setThirdCategory] = useState("")

    const textColor = useColorModeValue('secondaryGray.900', 'white');

    var isEnable = (): boolean => {
        if (firstCategory != "" && secondCategory != "" && thirdCategory != "") {
            return true
        } else {
            return false
        }
    };

    const submitCategory = async () => {
        var data = []
        data[0] = firstCategory
        data[1] = secondCategory
        data[2] = thirdCategory

        setRecoil(controller.getSelectedCategory, data)

        setRecoil(controller.getChartLoad, true)
        await useDelay(100)
        setRecoil(controller.getChartLoad, false)
    }

    return (
        <Flex flexDirection='column' me='20px' mt='28px'>
            <Text color={textColor} mb='10px' fontSize='20px' textAlign='start' fontWeight='700' lineHeight='100%'>
                {""}
            </Text>
            <Flex flexDirection={{ base: 'row', lg: 'column' }} mb='10px'>
                <Select
                    placeholder='Pilih Kategori 1'
                    size='sm' color='secondaryGray.600'
                    onChange={(value) => setFirstCategory(value.target.value)}
                >
                    {
                        controller.dataCategory.map((value, index, array) => {
                            return (
                                <option key={value.idCategory} value={value.idCategory}>
                                    {`${value.nameCategory} ${value.unitCategory}`}
                                </option>
                            )
                        })
                    }
                </Select>
            </Flex>
            <Flex flexDirection={{ base: 'row', lg: 'column' }} mb='10px'>
                <Select
                    placeholder='Pilih Kategori 2'
                    size='sm' color='secondaryGray.600'
                    onChange={(value) => setSecondCategory(value.target.value)}
                >
                    {
                        controller.dataCategory.map((value, index, array) => {
                            return (
                                <option key={value.idCategory} value={value.idCategory}>
                                    {`${value.nameCategory} ${value.unitCategory}`}
                                </option>
                            )
                        })
                    }
                </Select>
            </Flex>
            <Flex flexDirection={{ base: 'row', lg: 'column' }} mb='20px'>
                <Select
                    placeholder='Pilih Kategori 3'
                    size='sm' color='secondaryGray.600'
                    onChange={(value) => setThirdCategory(value.target.value)}
                >
                    {
                        controller.dataCategory.map((value, index, array) => {
                            return (
                                <option key={value.idCategory} value={value.idCategory}>
                                    {`${value.nameCategory} ${value.unitCategory}`}
                                </option>
                            )
                        })
                    }
                </Select>
            </Flex>

            <Flex align='center'>
                <SubmitButton
                    controller={controller}
                    isEnable={isEnable()}
                    onClick={() => submitCategory()}
                />
            </Flex>
        </Flex>
    )
}

export default CategoryConfig