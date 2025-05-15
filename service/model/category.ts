class CategoryModel {
    idCategory: string | null | undefined;
    idCreator: string | null | undefined;
    nameCategory: string | null | undefined;
    unitCategory: string | null | undefined;
    statusCategory: boolean | null | undefined;
    createCategory: Date | null | undefined;
  
    constructor(data: Partial<CategoryModel> = {}) {
      Object.assign(this, data);
    }
  
    static fromJson(obj: Record<string, any>): CategoryModel {
      return new CategoryModel(obj);
    }
  
    toJson(): Record<string, any> {
      return {
        idCategory: this.idCategory,
        idCreator: this.idCreator,
        nameCategory: this.nameCategory,
        unitCategory: this.unitCategory,
        statusCategory: this.statusCategory,
        createCategory: this.createCategory,
      };
    }
  }
  
  export default CategoryModel