import { AdminRegistrationFormData } from "../../types";
import { ADMIN_ENDPOINTS } from "../constants";
import { http } from "../http";

export const adminLoginApiCall = (email: string, password: string) => {
  return http.post(ADMIN_ENDPOINTS.login, { email, password });
}

export const adminRegistrationApiCall = (data: AdminRegistrationFormData) => {
  return http.post(ADMIN_ENDPOINTS.registration, data,  {
        headers: {
            // Set the "Content-type" header to "application/json"
            "Content-type": "application/json"
            // "Content-type": "multipart/form-data",
        },
    });
}
