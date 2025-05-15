import axios from "axios"

import TelegramConfig from "../../config/telegram-config"
import DataModel from "../../model/data"
import CategoryDataController from "../data/category_data"
import { dateDayFullTimeFormater } from "../../service/formatter/date"

class TelegramAppController extends TelegramConfig {
    categoryData = new CategoryDataController()

    sendTelegramMessage = async (data: DataModel[]) => {
        var message = ''

        message += `Waktu : ${dateDayFullTimeFormater(new Date())}\n`
        for (const e of data) {
            var category = await this.categoryData.getCategory(e.idCategory);
            message += `${category.nameCategory} : ${e.valueData} ${category.unitCategory}\n`;
        }

        await axios.post(`https://api.telegram.org/bot${this.tokenID}/sendMessage`, {
            chat_id: this.chatID,
            text: message,
        });
    }
}

export default TelegramAppController