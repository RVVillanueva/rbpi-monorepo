import { mysqlView } from "drizzle-orm/mysql-core";
import { generalAddress, generalClients } from "../schema";
import { sql } from "drizzle-orm";

export type GenClient = typeof clientsView.$inferSelect

// @SQLVIEW: Clients
export const clientsView = mysqlView('clients_view')
  .as(
    qb => qb
      .select({
        id: generalClients.clientid.as('id'),
        savingsId: generalClients.savingsid.as('savings_id'),
        centerId: generalClients.centerid.as('center_id'),
        officeId: generalClients.officeid.as('office_id'),
        branchId: generalClients.branch.as('branch_id'),
        spouseId: generalClients.spouseid.as('spouse_id'),
        assetSizeId: generalClients.assetsizeid.as('asset_size_id'),

        uuid: generalClients.clientUuid.as('uuid'),
        email: generalClients.emailaddress.as('email'),
        
        fullName: sql<string>`
          CONCAT(
            ${ generalClients.firstname },
            CASE WHEN ${ generalClients.middlename } <> '' THEN CONCAT(' ', ${ generalClients.middlename }, ' ') ELSE '' END,
            ${ generalClients.lastname },
            CASE WHEN ${ generalClients.suffixname } <> '' THEN CONCAT(' ', ${ generalClients.suffixname }) ELSE '' END
          )
        `.as('full_name'),

        firstName: generalClients.firstname.as('first_name'),
        lastName: generalClients.lastname.as('last_name'),
        middleName: generalClients.middlename.as('middle_name'),
        suffixName: generalClients.suffixname.as('suffix_name'),
        birthdate: generalClients.birthdate,
        birthplace: generalClients.birthplace,

        gender: sql<string>`
            CASE ${ generalClients.gender }
              WHEN 1 THEN 'Male'
              WHEN 2 THEN 'Female'
              ELSE 'Other'
            END
          `.as('gender'),

        civilStatus: sql<string>`
            CASE ${ generalClients.civilstatus }
              WHEN 1 THEN 'Single'
              WHEN 2 THEN 'Married'
              WHEN 3 THEN 'Widowed'
              WHEN 4 THEN 'Separated'
              WHEN 5 THEN 'Annulled'
              ELSE 'Unknown'
            END
          `.as('civil_status'),

        height: generalClients.height,
        weight: generalClients.weight,

        nationality: generalClients.nationality,
        primaryContact: generalClients.contactnumber.as('primary_contact'),
        homeNumber: generalClients.homenumber.as('home_number'),
        contactNumber1: generalClients.cpnumber1.as('contact_number_1'),
        contactNumber2: generalClients.cpnumber2.as('contact_number_2'),
        barangayId: generalClients.barangayid.as('barangay_id'),
        barangayId2: generalClients.barangayid2.as('barangay_id_2'),
        address1: generalClients.addressdetails.as('address_1'),
        address2: generalClients.addressdetails2.as('address_2'),
        contactPerson: generalClients.contactperson.as('contact_person'),
        facebookAccount: generalClients.facebookacct.as('facebook_account'),

        gsis: generalClients.gsis,
        sss: generalClients.sss,
        philHealth: generalClients.philhealth,
        pagIbig: generalClients.pagibig,
        tin: generalClients.tin,

        primaryId: {
          id: generalClients.id1number.as('primary_id'),
          issuedAt: generalClients.id1dateissued.as('primary_issued_at'),
          placeIssued: generalClients.id1placeissued.as('primary_place_issued'),
          type: generalClients.id1type.as('primary_type'),
        },

        secondaryId: {
          id: generalClients.id2number.as('secondary_id'),
          issuedAt: generalClients.id2dateissued.as('secondary_issued_at'),
          placeIssued: generalClients.id2placeissued.as('secondary_place_issued'),
          type: generalClients.id2type.as('secondary_type'),
          expiredAt: generalClients.id2expiration.as('secondary_expired_at'),
        },

        fundName: generalClients.fundname.as('fund_name'),
        fundAddress: generalClients.fundaddressdetails.as('fund_address'),
        fundBarangayId: generalClients.fundbarangayid.as('fund_barangay_id'),
        fundPosition: generalClients.fundposition.as('fund_position'),
        fundOccupation: generalClients.fundoccupation.as('fund_occupation'),
        fundContact: generalClients.fundcontact.as('fund_contact'),
        fundYearStart: generalClients.fundyearstart.as('fund_year_start'),
        fundGrossIncome: generalClients.fundgrossincome.as('fund_gross_income'),

        mmLastName: generalClients.mmlastname.as('mm_last_name'),
        mmFirstName: generalClients.mmfirstname.as('mm_first_name'),
        mmMiddleName: generalClients.mmmiddlename.as('mm_middle_name'),

        smsEnrolled: generalClients.smsEnrolled.as('sms_enrolled'),

        createdAt: generalClients.datecreated.as('created_at'),
        updatedAt: generalClients.dateedited.as('updated_at'),

        riskProfile: generalClients.riskprofile.as('risk_profile'),
        vipTag: generalClients.viptag.as('vip_tag'),
        dosri: generalClients.dosri.as('dosri'),
        rpt: generalClients.rpt.as('rpt'),
        pep: generalClients.pep.as('pep'),

        fileCountSelfie: generalClients.fileCountSelfie.as('file_count_selfie'),
        fileCountId: generalClients.fileCountId.as('file_count_id'),
        fileCountSignature: generalClients.fileCountSignature.as('file_count_signature'),
        fileCountAttachment: generalClients.fileCountAttachment.as('file_count_attachment'),
        fileCountRiskProfiling: generalClients.fileCountRiskProfiling.as('file_count_risk_profiling'),
      })
      .from(generalClients)
  )

export type GenAddress = typeof addressesView.$inferSelect

// @SQLVIEW: Addresses
export const addressesView = mysqlView('addresses_view')
  .as(
    qb => qb
      .select({
        id: generalAddress.id.as('id'),
        code: generalAddress.code.as('code'),
        name: generalAddress.name.as('name'),
        town: generalAddress.town.as('town'),
        province: generalAddress.province.as('province'),
        region: generalAddress.region.as('region'),
        completeAddress: generalAddress.addresscomplete.as('complete_address'),
        level: generalAddress.level.as('level'),
        parent: generalAddress.parent.as('parent'),
        levelPsgc: generalAddress.levelPsgc.as('level_psgc'),
        codeParent: generalAddress.codeParent.as('code_parent'),
        zipCode: generalAddress.zipcode.as('zip_code'),
        isHighRisk: generalAddress.isHighRisk.as('is_high_risk'),
      })
      .from(generalAddress)
  )
