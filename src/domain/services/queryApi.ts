'use·client';

import axios from 'axios';

export const getQueriesValueFromApiGeo = async (api: string) => {
  try {
    const requestApi = await axios.get(api);
    return requestApi.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
