import { v4 as uuidv4 } from 'uuid';
import { atom, useRecoilValue } from "recoil";
import { setRecoil } from "recoil-nexus";
import { basicWarningToast } from '../../service/toast/basic';
import CategoryData from '../data/category_data';
import CategoryModel from '../../model/category';
import CategoryFrgamentController from '../fragment/category_fragment_controller';
import AuthServiceController from '../service/auth_service_controller';

class CategoryModalController {
    authService = new AuthServiceController()
    categoryData = new CategoryData()

    getSetModal = atom({
        key: "category_modal", default: {
            idCategory: null,
            isOpen: false,
        }
    });
    setModal = useRecoilValue(this.getSetModal)

    getCategory = atom({ key: "data_category_modal", default: '' });
    dataCategory = useRecoilValue(this.getCategory)

    getForm = atom({
        key: "category_form", default: {
            txt_id: '',
            txt_name: '',
            txt_unit: '',
        }
    });
    form = useRecoilValue(this.getForm)

    getPreload = atom({ key: "load_modal", default: true });
    preload = useRecoilValue(this.getPreload)

    configModal = (idCategory?: string) => {
        var modal = {
            idCategory: idCategory,
            isOpen: !this.setModal.isOpen,
        }
        setRecoil(this.getSetModal, modal)
    }

    getData = async () => {
        setRecoil(this.getPreload, true)


        if (this.setModal.idCategory == null) {
            setRecoil(this.getCategory, uuidv4())

            const form = {
                txt_id: '',
                txt_name: '',
                txt_unit: '',
            }

            setRecoil(this.getForm, form)
        } else {
            // setRecoil(this.getSetModal, this.setModal.idCategory)

            var data = await this.categoryData.getCategory(this.setModal.idCategory)
            const form = {
                txt_id: data.idCategory,
                txt_name: data.nameCategory,
                txt_unit: data.unitCategory,
            }
            
            setRecoil(this.getForm, form)
        }

        setRecoil(this.getPreload, false)
    }

    changeForm = (text: any, field: string) => {
        var obj = {
            [field]: text
        }

        var data = { ...this.form, ...obj }
        setRecoil(this.getForm, data)
    }

    validateData = async (mode: string, fragmentController?: CategoryFrgamentController) => {
        if (this.form.txt_name == '' && this.form.txt_unit == '') {
            basicWarningToast('Semua data category masih kosong', mode)
            return false
        } else if (this.form.txt_name == '') {
            basicWarningToast('Data nama category masih kosong', mode)
            return false
        } else if (this.form.txt_unit == '') {
            basicWarningToast('Data deskripsi category masih kosong', mode)
            return false
        } else {
            return await this.pushData(mode, fragmentController)
        }
    }

    pushData = async (mode: string, fragmentController?: CategoryFrgamentController) => {
        var result = await this.authService.authSession()

        if (fragmentController != null) {
            fragmentController.setLoad(true)
        }

        var categoryModel = {
            idCategory: this.form.txt_id,
            idCreator: result.data.session.user.id,
            nameCategory: this.form.txt_name,
            unitCategory: this.form.txt_unit,
            statusCategory: true,
            createCategory: new Date(),
        } as CategoryModel

        if (this.setModal.idCategory == null) {
            await this.categoryData.addCategory(categoryModel)
            fragmentController.getData()
            fragmentController.setLoad(false)
            this.configModal()

            return true
        } else {
            await this.categoryData.updateCategory(categoryModel)

            if (fragmentController != null) {
                fragmentController.getData()
                fragmentController.setLoad(false)
            }

            this.configModal()
            return true
        }
    }

}

export default CategoryModalController