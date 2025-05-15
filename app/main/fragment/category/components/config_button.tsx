import { HStack, Icon, IconButton, useColorModeValue } from "@chakra-ui/react"
import { MdCheck, MdDelete, MdEdit } from "react-icons/md"

import CategoryFrgamentController from "../../../../../../service/controller/fragment/category_fragment_controller"
import CategoryModel from "../../../../../../service/model/category"

type ButtonModel = {
    controller: CategoryFrgamentController
    data: CategoryModel
}

const ConfigButton = ({ controller, data }: ButtonModel) => {
    const brandColor = useColorModeValue('brand.500', 'white')

    return (
        <HStack spacing="4">
            <IconButton
                aria-label="Edit"
                icon={
                    <Icon
                        w='30px'
                        h='30px'
                        as={MdEdit}
                        color={brandColor}
                    />
                }
                onClick={() => controller.modalController.configModal(data.idCategory)}
                colorScheme="yellow"
                borderRadius="10"
            />
            <IconButton
                aria-label="Delete"
                icon={
                    <Icon
                        w='30px'
                        h='30px'
                        as={data.statusCategory ? MdDelete : MdCheck}
                        color={brandColor}
                    />
                }
                onClick={() => data.statusCategory
                    ? controller.disableCategory(data.idCategory)
                    : controller.enableCategory(data.idCategory)}
                colorScheme={data.statusCategory ? "red" : "green"}
                borderRadius="10"
            />
        </HStack>
    )
}

export default ConfigButton