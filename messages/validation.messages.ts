export const VALIDATION_MESSAGES = {
  AUTH: {
    EMAIL: {
      REQUIRED: "Email is required.",
      MAX_LENGTH: (maxLength: number) =>
        `Email must be at most ${maxLength} characters long.`,
      INVALID: "Invalid email address.",
    },

    NAME: {
      REQUIRED: "Name is required.",
      MAX_LENGTH: (maxLength: number) =>
        `Name must be at most ${maxLength} characters long.`,
      INVALID: "Invalid name format.",
    },

    PASSWORD: {
      MIN_LENGTH: (minLength: number) =>
        `Password must be at least ${minLength} characters long.`,
      MAX_LENGTH: (maxLength: number) =>
        `Password must be at most ${maxLength} characters long.`,
      INVALID:
        "Password must include uppercase, lowercase, number, and special character.",
    },

    CONFIRM_PASSWORD: {
      PASSWORDS_MISMATCH: "Passwords do not match.",
    },
  },

  LEAVE_REQUEST: {
    START_DATE: {
      REQUIRED: "Start date is required.",
    },

    END_DATE: {
      REQUIRED: "End date is required.",
      INVALID: "End date cannot be earlier than start date.",
    },
  },
};
