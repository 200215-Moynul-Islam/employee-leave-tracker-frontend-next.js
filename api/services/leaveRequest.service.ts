import { UUID } from "crypto";
import apiClient from "../axios/apiClient";
import endpoints from "../endpoints";
import { LeaveRequestCreateSchemaType } from "@/schemas";

const leaveService = {
  getAllLeaveRequests: async () => {
    const axiosResponse = await apiClient.get(endpoints.leaveRequests.base);

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  approveLeaveRequest: async (id: UUID) => {
    const axiosResponse = await apiClient.patch(
      endpoints.leaveRequests.approveById(id)
    );

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  rejectLeaveRequest: async (id: UUID) => {
    const axiosResponse = await apiClient.patch(
      endpoints.leaveRequests.rejectById(id)
    );

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  createLeaveRequestForMe: async (
    leaveRequest: LeaveRequestCreateSchemaType
  ) => {
    const axiosResponse = await apiClient.post(
      endpoints.leaveRequests.myLeaveRequests,
      leaveRequest
    );

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },

  deleteMyLeaveRequest: async (id: UUID) => {
    const axiosResponse = await apiClient.delete(
      endpoints.leaveRequests.myLeaveRequestById(id)
    );

    const backendResponse = axiosResponse.data;

    return backendResponse;
  },
};

export default leaveService;
