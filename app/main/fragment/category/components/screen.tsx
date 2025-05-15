import CategoryFrgamentController from "../../../../../../service/controller/fragment/category_fragment_controller"
import AddButton from "./add_button"
import TableData from "./table"

type ScreenModel = {
    controller: CategoryFrgamentController
}

const ScreenPage = ({ controller }: ScreenModel) => {
    return (
        <>
            <TableData controller={controller} />
            <AddButton controller={controller} />
        </>
    )
}

export default ScreenPage