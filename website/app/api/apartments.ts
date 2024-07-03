import { Appartment } from "../interface"
import { ApiBaseUrl, request } from "./request"

export const GET_APARTMENTS = (params?: any) =>
  request<Appartment[]>("get", `${ApiBaseUrl}/appartment`, params)

export const CREATE_APARTMENT = (data: any) =>
  request<Appartment>("post", `${ApiBaseUrl}/appartment`, data)

export const GET_APARTMENT_BY_ID = (id: number) =>
  request<Appartment>("get", `${ApiBaseUrl}/appartment/${id}`)
