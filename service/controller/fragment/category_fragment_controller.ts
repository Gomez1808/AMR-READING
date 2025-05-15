import { atom, useRecoilValue } from "recoil";
import UserData from "../data/user_data";
import { setRecoil } from "recoil-nexus";
import CategoryDataController from "../data/category_data";
import CategoryModel from "../../model/category";
import CategoryModalController from "../modal/category_modal_controller";

class CategoryFrgamentController {
    modalController = new CategoryModalController()
    userData = new UserData()
    categoryData = new CategoryDataController()

    getCategory = atom({ key: "list_category_dashboard_data", default: [] as Array<CategoryModel> });
    dataCategory = useRecoilValue(this.getCategory)

    getPageLoad = atom({ key: "page_load", default: true });
    pageLoad = useRecoilValue(this.getPageLoad)

    setLoad = (load: boolean) => {
        setRecoil(this.getPageLoad, load)
    }

    getData = async () => {
        this.setLoad(true)

        var listCategory = await this.categoryData.getAllCategory()
        setRecoil(this.getCategory, listCategory ?? [])

        this.setLoad(false)
    }

    disableCategory = async (idCategory: string) => {
        var category = await this.categoryData.getCategory(idCategory)
        category.statusCategory = false

        await this.categoryData.updateCategory(category)
        this.getData()
    }

    enableCategory = async (idCategory: string) => {
        var category = await this.categoryData.getCategory(idCategory)
        category.statusCategory = true

        await this.categoryData.updateCategory(category)
        this.getData()
    }
}

export default CategoryFrgamentController