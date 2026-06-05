
import type { createServer } from '@/server'
import { createAuthFromDatabase } from '@/auth'
import { env } from 'cloudflare:workers'

import { faker } from '@faker-js/faker'
import { User } from 'better-auth/client'
import { createMiddleware } from 'hono/factory'
import { db } from './db'

const MAX_ADMIN = 5
const MAX_NORMAL_USERS = 50

export const auth = createAuthFromDatabase(db, env)

export const createFakeUser = async (role: 'admin' | 'user') => {
  const { test } = await auth.$context

  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  const user = test.createUser({
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({
      firstName,
      lastName,
      provider: 'gmail.com',
    }),
    emailVerified: true,
    image: faker.image.personPortrait(),
    role,
  })

  return test.saveUser(user)
}

export const createFakeUsers = (count: number, role: 'admin' | 'user') =>
  Promise.all(Array.from({ length: count }, () => createFakeUser(role)))

export const deleteFakeUser = async (user: User) => {
  const { test } = await auth.$context
  return test.deleteUser(user.id)
}
