import { ADMIN_ENDPOINTS } from "../constants";
import { http } from "../http";

export const adminLoginApiCall = (email: string, password: string) => {
  return http.post(ADMIN_ENDPOINTS.login, { email, password });
}

export const adminRegistrationApiCall = (name: string, email: string, password: string, role: string) => {
  return http.post(ADMIN_ENDPOINTS.registration, { name, email, password, role });
}