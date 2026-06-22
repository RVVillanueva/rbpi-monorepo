import { members, organizationProfiles, organizations, users } from "@schema/index";
import { eq, getTableName } from "drizzle-orm";

import { ok, err } from "neverthrow";
import { NotFoundError } from "~/db/errors";
import { createNumericId, createUniqueId } from "../helpers/struct";

export const getUserById = async (
  db: RBPICore.CoreDatabase,
  userId: string
) => {
  try {
    const [user] = await db.selectDistinct().from(users).where(eq(users.id, userId))

    if (!user) {
      return err(new NotFoundError(getTableName(users)))
    }

    return ok(user)
  } catch (error) {
    console.error(error)
    return err(error)
  }
}

const legalName = 'Rural Bank of Pilar Sorsogon, Inc.'
const legalSlug = 'rural-bank-of-pilar-sorsogon-inc'
const legalShortName = 'rbpi'

const defaultCurrency = 'PHP'
const defaultCountry = 'Philippines'
const defaultState = 'Sorsogon'
const defaultCity = 'Pilar'
const defaultPostalCode = '4714'
const defaultAddress = 'RBPI Building, Milleza St., Brgy. Dao, Poblacion, Pilar'

export const createRbpiOrganization = async (
  db: RBPICore.CoreDatabase,
) => {
  try {
    const newOrg = await db.transaction(async tx => {
      const [org] = await tx
        .insert(organizations)
        .values({
          id: createUniqueId(),
          numericId: createNumericId(),
          name: legalName,
          slug: legalSlug,
        })
        .returning()

      // Create new organization profile
      await tx
        .insert(organizationProfiles)
        .values({
          numericId: org.numericId!,
          organizationId: org.id,
          uid: createUniqueId(),
          name: legalName,
          shortName: legalShortName,
          slug: legalSlug,

          defaultCountry,
          defaultState,
          defaultCity,
          defaultPostalCode,
          defaultAddress,
          defaultCurrency,
        })
        .returning()

      return org
    })
    
    return ok(newOrg)
  } catch (error) {
    console.error(error)
    return err(error)
  }
}

export const getRbpiOrganization = async (
  db: RBPICore.CoreDatabase,
) => {
  try {
    const [res] = await db
      .selectDistinct({ organizations })
      .from(organizationProfiles)
      .leftJoin(organizations,
        eq(organizations.id, organizationProfiles.organizationId),
      )
      .where(
        eq(organizationProfiles.shortName, legalShortName),
      )
    
    if (!res || !res?.organizations) {
      return createRbpiOrganization(db) // Create organization
    }

    return ok(res.organizations)
  } catch (error) {
    console.error(error)
    return err(error)
  }
}

export const addLegacyUserToOrganization = async (
  db: RBPICore.CoreDatabase,
  userId: string,
  organizationId: string
) => {
  return db.transaction(async tx => {
    const [member] = await tx
      .insert(members)
      .values({
        id: createUniqueId(),
        userId,
        organizationId,
      })
      .returning()

    return ok(member)
  })
}

export const getOrganizationById = async (
  db: RBPICore.CoreDatabase,
  organizationId?: string,
) => {
  if (!organizationId) {
    return err(new NotFoundError(getTableName(organizations)))
  }

  return db.transaction(async tx => {
    const [org] = await tx
      .selectDistinct()
      .from(organizations)
      .leftJoin(
        organizationProfiles, 
        eq(organizationProfiles.organizationId, organizations.id),
      )
      .where(
        eq(organizations.id, organizationId),
      )

    if (!org) {
      return err(new NotFoundError(getTableName(organizations)))
    }

    return ok(org)
  })
}
