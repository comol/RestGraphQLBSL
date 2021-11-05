import goodsAPI from "./goods-api";

/**
 * All available data sources, e.g. from APIs, DBs etc.
 *
 * _Data sources are classes that encapsulate fetching data from a particular service_
 * https://www.apollographql.com/docs/apollo-server/data/data-sources/
 */
export const dataSources = () => ({
  goodsAPI: new goodsAPI(), // just one for now
});

export type DataSources = ReturnType<typeof dataSources>;
