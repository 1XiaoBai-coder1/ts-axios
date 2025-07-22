export type Method='get' |'Get'
|'post'|'Post'
|'options'|'Options'
|'delete'|'Delete'
|'put'|'Put'
|'patch'|'Patch'
export interface AxiosRequestConfig{
    url:string,
    method?:Method,
    data?:any,
    params?:any
}