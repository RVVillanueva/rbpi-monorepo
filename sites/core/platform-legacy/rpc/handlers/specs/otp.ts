import { createRoute, z } from "@hono/zod-openapi";

export const generateOtpRoute = createRoute({
  method: 'post',
  path: '/otp/generate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z
                .string()
                .regex(/^[A-Z]{3}.+$/, 'Invalid username')
                .min(8, 'Invalid username')
                .min(1),
            }),
        },
      },
    },
  },

  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            id: z.number(),
            email: z.email(),
            sent: z.boolean(),
          }),
        },
      },
      description: 'Respond the state of the OTP and whether it was sent or not.',
    },

    404: {
      content: {
        'application/json': {
          schema: z.object({
            
          }),
        },
      },
      description: 'User not found',
    },

    503: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: 'Service unavailable',
    },

    500: {
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
      description: 'Internal server error',
    },
  },

})

export const validateOtpRoute = createRoute({
  method: 'post',
  path: '/otp/validate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            id: z.number(),
            input: z.number().min(100000).max(999999),
          }),
        },
      },
    },
  },

  responses: {
    200: {
      content: {
        'application/json': {
          schema: z
            .object({
              
            })
            .openapi('ValidateOTPResponse#Success'),
        },
      },
      description: 'Validates the OTP sent by the actor',
    },

    403: {
      content: {
        'application/json': {
          schema: z
            .object({

            })
            .openapi('ValidateOTPResponse#Forbidden'),
        },
      },
      description: 'Mismatch',
    },

    429: {
      content: {
        'application/json': {
          schema: z
            .object({

            })
            .openapi('ValidateOTPResponse#TooManyRequest'),
        },
      },
      description: 'Actor attempted too many validations',
    },

    424: {
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi('ValidateOTPResponse#FailedDependency'),
        },
      },
      description: 'Core failed to meet depedencies',
    },
  },
})