import { UserCreateSchemaType, UserUpdateSchemaType } from "@/schemas";
import apiClient from "../axios/apiClient";
import endpoints from "../endpoints";
import { UUID } from "crypto";
import { PasswordType } from "@/schemas/base";

const userService = {
  getAllEmployees: async () => {
    const axiosResponse = await apiClient.get(endpoints.users.employees);

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  createUser: async (user: UserCreateSchemaType) => {
    const axiosResponse = await apiClient.post(endpoints.users.base, user);

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  getUserById: async (id: UUID) => {
    const axiosResponse = await apiClient.get(endpoints.users.userById(id));

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  update: async (id: UUID, user: UserUpdateSchemaType) => {
    const axiosResponse = await apiClient.patch(
      endpoints.users.userById(id),
      user
    );

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  delete: async (id: UUID) => {
    const axiosResponse = await apiClient.delete(endpoints.users.userById(id));

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  updatePassword: async (password: PasswordType) => {
    const axiosResponse = await apiClient.patch(
      endpoints.users.updateMyPassword,
      {
        password,
      }
    );

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },
};

export default userService;
