import { Box } from "@chakra-ui/react";
import CategoryFrgamentController from "../../../../../service/controller/fragment/category_fragment_controller"
import { useEffect } from 'react';
import { LoadData } from "web/components/load";
import ScreenPage from "./components/screen";
import CategoryModal from "app/modal/category";

const CategoryFrgament = () => {
    var controller = new CategoryFrgamentController();

    useEffect(() => {
        controller.getData()
    }, [])


    return controller.pageLoad == false
        ? (
            <Box mt={{ base: '180px', md: '80px', xl: '80px' }}>
                <ScreenPage controller={controller} />
                {
                    controller.modalController.setModal.isOpen == true
                        ? (<CategoryModal controller={controller.modalController} fragmentController={controller} />)
                        : (<></>)
                }
            </Box>
        )
        : (<LoadData />)
}

export default CategoryFrgament