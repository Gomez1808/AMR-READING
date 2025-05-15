class UserModel {
    idUser: string | null | undefined;
    nameUser: string | null | undefined;
    emailUser: string | null | undefined;
    passwordUser: string | null | undefined;
    statusUser: boolean | null | undefined;
    createUser: Date | null | undefined;
  
    constructor(data: Partial<UserModel> = {}) {
      Object.assign(this, data);
    }
  
    static  fromJson(obj: Record<string, any>): UserModel {
      return new UserModel(obj);
    }
  
    toJson(): Record<string, any> {
      return {
        idUser: this.idUser,
        nameUser: this.nameUser,
        emailUser: this.emailUser,
        passwordUser: this.passwordUser,
        statusUser: this.statusUser,
        createUser: this.createUser,
      };
    }
  }
  
  export default UserModel