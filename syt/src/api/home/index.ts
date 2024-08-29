import request from '@/utils/request';

enum API {
  HOSPITAL_URL = `/hosp/hospital/`, // 医院的数据接口地址
  findByDictCode = `/cmn/dict/findByDictCode/`
}
export const reqHopital = (page: number, limit: number) => request.get(API.HOSPITAL_URL + `${page}/${limit}`)
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any>(API.findByDictCode + dictCode);
