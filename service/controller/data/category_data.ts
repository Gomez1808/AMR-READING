import SupabaseConfig from "../../config/supabase-config"
import CategoryModel from "../../model/category"

class CategoryDataController {
    supabase = SupabaseConfig.supabase
    table = 'tblCategory'

    async getAllCategory(): Promise<CategoryModel[]> {
      const listData: CategoryModel[] = [];
      const { data } = await this.supabase.from(this.table).select();
  
      data?.forEach((e: Object) => {
        listData.push(CategoryModel.fromJson(e));
      });
  
      return listData;
    }
    
    async getAllActiveCategory(): Promise<CategoryModel[]> {
      const listData: CategoryModel[] = [];
      const { data } = await this.supabase.from(this.table).select().eq("statusCategory", true);
  
      data?.forEach((e: Object) => {
        listData.push(CategoryModel.fromJson(e));
      });
  
      return listData;
    }
  
    async getCategory(idCategory: string): Promise<CategoryModel> {
      const listData: CategoryModel[] = [];
      const { data } = await this.supabase
        .from(this.table)
        .select()
        .eq('idCategory', idCategory);
  
      data?.forEach((e: Object) => {
        listData.push(CategoryModel.fromJson(e));
      });
  
      return listData.length > 0 ? listData[0] : new CategoryModel();
    }
  
    async addCategory(data: CategoryModel): Promise<void> {
      await this.supabase.from(this.table).upsert([data]);
    }
  
    async updateCategory(data: CategoryModel): Promise<void> {
      await this.supabase
        .from(this.table)
        .upsert([data])
        .match({ idCategory: data.idCategory });
    }
  
    async deleteCategory(idCategory: string): Promise<void> {
      await this.supabase.from(this.table).upsert([{ idCategory }]);
    }
}

export default CategoryDataController