import { atom, useRecoilValue } from "recoil";
import UserData from "../data/user_data";
import { setRecoil } from "recoil-nexus";
import CategoryDataController from "../data/category_data";
import CategoryModel from "../../model/category";
import DataModel from "../../model/data";
import DataDataController from "../data/data_data";

class DashboardFrgamentController {
    userData = new UserData()
    categoryData = new CategoryDataController()
    dataData = new DataDataController()

    getChartData = atom({
        key: "list_chart_data", default: {
            labels: [],
            datasets: [],
        }
    });
    dataChartData = useRecoilValue(this.getChartData)

    getSelectedCategory = atom({ key: "list_selected_category", default: [] });
    dataSelectedCategory = useRecoilValue(this.getSelectedCategory)

    getCategory = atom({ key: "list_category_dashboard_data", default: [] as Array<CategoryModel> });
    dataCategory = useRecoilValue(this.getCategory)

    getDatas = atom({ key: "list_data_dashboard_data", default: [] as Array<DataModel> });
    dataDatas = useRecoilValue(this.getDatas)

    getPageLoad = atom({ key: "page_load", default: true });
    pageLoad = useRecoilValue(this.getPageLoad)

    getChartLoad = atom({ key: "chart_load", default: true });
    chartLoad = useRecoilValue(this.getChartLoad)

    setLoad = (load: boolean) => {
        setRecoil(this.getPageLoad, load)
    }

    getData = async () => {
        this.setLoad(true)

        var listCategory = await this.categoryData.getAllActiveCategory()
        setRecoil(this.getCategory, listCategory ?? [])

        await this.setData("", false)
        setRecoil(this.getSelectedCategory, [])

        this.setLoad(false)
    }

    setData = async (newData: any, isNew: boolean) => {
        try {
            if (isNew) {
                var listData = await this.dataData.getAllData()
                var data = DataModel.fromJson(newData)
                listData = [...listData, data]

                console.log(listData.length);
                console.log(this.dataDatas.length);
                
                listData.push(data)
                listData.sort((a, b) => Date.parse(b.createData.toString()) - Date.parse(a.createData.toString()));

                setRecoil(this.getDatas, listData)
            } else {
                var listData = await this.dataData.getAllData()
                setRecoil(this.getDatas, listData ?? [])
            }
        } catch (error) {
            console.log(error);

        }
    }
}

export default DashboardFrgamentController
