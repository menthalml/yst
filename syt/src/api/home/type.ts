export interface ResponseData {
  code: number,
  message: string,
  ok: boolean
}
export interface hospital {
  id: string,
  createTime: string,
  updateTime: string,
  isDeleted: boolean,
  param: {
    hostypeString: string,
    fullAddress: string
  }
}