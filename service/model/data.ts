class DataModel {
    idData: string | null | undefined;
    idCategory: string | null | undefined;
    valueData: number | null | undefined;
    statusData: boolean | null | undefined;
    createData: Date | null | undefined;
  
    constructor(data: Partial<DataModel> = {}) {
      Object.assign(this, data);
    }
  
    static  fromJson(obj: Record<string, any>): DataModel {
      return new DataModel(obj);
    }
  
    toJson(): Record<string, any> {
      return {
        idData: this.idData,
        idCategory: this.idCategory,
        valueData: this.valueData,
        statusData: this.statusData,
        createData: this.createData,
      };
    }
  }
  
  export default DataModel