import { UUID } from "crypto";

const endpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
  },

  users: {
    base: "/users",
    employees: "/users/employees",
    myLeaveRequests: "/users/me/leave-requests",
    updateMyPassword: "/users/me/password",
    userById: (id: UUID) => `/users/${id}`,
  },

  leaveRequests: {
    base: "/leave-requests",
    myLeaveRequests: "/leave-requests/me",
    myLeaveRequestById: (id: UUID) => `/leave-requests/me/${id}`,
    approveById: (id: UUID) => `/leave-requests/${id}/approve`,
    rejectById: (id: UUID) => `/leave-requests/${id}/reject`,
  },
};

export default endpoints;