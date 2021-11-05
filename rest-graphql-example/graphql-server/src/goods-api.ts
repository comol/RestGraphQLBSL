import { RESTDataSource } from "apollo-datasource-rest";

export type Product = {
  name: string;
};

/** Wraps the rest-api-server's API as data source to be used in resolvers */
export default class goodsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:8080/test/hs/"; // this sets the base-url for the API
  }


  async getGoods() {
    return this.get<Product[]>('goods');
  }

}
