import { Button, Icon, useColorModeValue } from "@chakra-ui/react"
import CategoryFrgamentController from "../../../../../../service/controller/fragment/category_fragment_controller"
import { IoAddOutline } from "react-icons/io5"

type ButtonModel = {
    controller: CategoryFrgamentController
}

const AddButton = ({ controller}: ButtonModel) => {
    let bgButton = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
    const shadow = useColorModeValue(
      '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
      '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
    );
  
    let left = ''
    let right = '35px'
  
    return (
      <Button
        h='60px'
        w='60px'
        bg={bgButton}
        zIndex='99'
        position='fixed'
        variant='no-effects'
        left={left}
        right={right}
        bottom='30px'
        border='1px solid'
        borderColor='#6A53FF'
        borderRadius='50px'
        display='flex'
        p='0px'
        alignItems='center'
        justifyContent='center'
        shadow={shadow}
        onClick={() => controller.modalController.configModal()}
      >
        <Icon
          h='24px'
          w='24px'
          color='white'
          as={IoAddOutline}
        />
      </Button>
    )
}

export default AddButton