import request from '@/utils/request';

enum API {
  HOSPITAL_URL = `/hosp/hospital/`, // 医院的数据接口地址
  findByDictCode = `/cmn/dict/findByDictCode/`,
  findByHosname = `/hosp/hospital/findByHosname/`
}
export const reqHopital = (page: number, limit: number, hostype='', districtCode = '') => request.get(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any>(API.findByDictCode + dictCode);
export const findByHosname = (hostname: string) => request.get(API.findByHosname + hostname);