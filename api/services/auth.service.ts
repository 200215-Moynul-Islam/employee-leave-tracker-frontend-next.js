import { LoginSchemaType } from "@/schemas";
import apiClient from "../axios/apiClient";
import endpoints from "../endpoints";

const authService = {
  login: async (loginPayload: LoginSchemaType) => {
    const axiosResponse = await apiClient.post(
      endpoints.auth.login,
      loginPayload
    );

    const backendResponse = axiosResponse.data;

    if (backendResponse?.success) {
      localStorage.setItem("token", backendResponse.data.access_token);
    }

    return backendResponse;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

export default authService;
