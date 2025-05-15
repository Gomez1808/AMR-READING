import SupabaseConfig from "../../config/supabase-config"
import UserModel from "../../model/user"

class UserDataController {
    supabase = SupabaseConfig.supabase
    table = 'tblUser'

    async getAllUser(): Promise<UserModel[]> {
      const listData: UserModel[] = [];
      const { data } = await this.supabase.from(this.table).select();
  
      data?.forEach((e: Object) => {
        listData.push(UserModel.fromJson(e));
      });
  
      return listData;
    }
  
    async getUser(idUser: string): Promise<UserModel> {
      const listData: UserModel[] = [];
      const { data } = await this.supabase
        .from(this.table)
        .select()
        .eq('idUser', idUser);
  
      data?.forEach((e: Object) => {
        listData.push(UserModel.fromJson(e));
      });
  
      return listData.length > 0 ? listData[0] : new UserModel();
    }
  
    async addUser(data: UserModel): Promise<void> {
      await this.supabase.from(this.table).upsert([data]);
    }
  
    async updateUser(data: UserModel): Promise<void> {
      await this.supabase
        .from(this.table)
        .upsert([data])
        .match({ idUser: data.idUser });
    }
  
    async deleteUser(idUser: string): Promise<void> {
      await this.supabase.from(this.table).upsert([{ idUser }]);
    }
}

export default UserDataController