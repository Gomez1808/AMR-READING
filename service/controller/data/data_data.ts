import SupabaseConfig from "../../config/supabase-config"
import DataModel from "../../model/data"

class DataDataController {
    supabase = SupabaseConfig.supabase
    table = 'tblData'

    async getAllData(): Promise<DataModel[]> {
      const listData: DataModel[] = [];
      const { data } = await this.supabase.from(this.table).select();
  
      data?.forEach((e: Object) => {
        listData.push(DataModel.fromJson(e));
      });
  
      return listData;
    }

    async getDatabyCategory(idCategory: string): Promise<DataModel[]> {
      const listData: DataModel[] = [];
      const { data } = await this.supabase
            .from(this.table).select().eq('idCategory', idCategory);
  
      data?.forEach((e: Object) => {
        listData.push(DataModel.fromJson(e));
      });
  
      return listData;
    }
  
    async getData(idData: string): Promise<DataModel> {
      const listData: DataModel[] = [];
      const { data } = await this.supabase
        .from(this.table)
        .select()
        .eq('idData', idData);
  
      data?.forEach((e: Object) => {
        listData.push(DataModel.fromJson(e));
      });
  
      return listData.length > 0 ? listData[0] : new DataModel();
    }
  
    async addData(data: DataModel): Promise<void> {
      await this.supabase.from(this.table).upsert([data]);
    }
  
    async updateData(data: DataModel): Promise<void> {
      await this.supabase
        .from(this.table)
        .upsert([data])
        .match({ idData: data.idData });
    }
  
    async deleteData(idData: string): Promise<void> {
      await this.supabase.from(this.table).upsert([{ idData }]);
    }
}

export default DataDataController