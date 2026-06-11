import { mysqlView } from "drizzle-orm/mysql-core";
import {
  insuranceProducts,
  lendingLoanproducts,
  lendingLoanproductadjustments,
  savingsProducts,
  lendingLoanproductstouse,
  savingsProductstouse,
  lendingCreditlineProduct,
} from "../schema";
import { eq, sql } from "drizzle-orm";

export type LoanProduct = typeof loanProductsView.$inferSelect

// @SQLVIEW: Loan products
export const loanProductsView = mysqlView('loan_products_view')
  .as(
    qb => qb
      .select({
        id: lendingLoanproducts.loanproductid.as('id'),
        type: lendingLoanproducts.type.as('type'),
        status: lendingLoanproducts.status,
        name: lendingLoanproducts.name,
        shortName: lendingLoanproducts.shortname.as('short_name'),
        description: lendingLoanproducts.description,
        isEmployeeLoan: lendingLoanproducts.isEmployeeLoan.as('is_employee_loan'),
        maxAmount: lendingLoanproducts.loanamountmaximum.as('max_amount'),
        productCeiling: lendingLoanproducts.loanproductceiling.as('product_ceiling'),
        maxLoadCount: lendingLoanproducts.loancountmaximum.as('max_load_count'),
        grouping: lendingLoanproducts.grouping,
        groupBy: lendingLoanproducts.groupby.as('group_by'),
        termUnit: lendingLoanproducts.termunit.as('term_unit'),
        termDefault: lendingLoanproducts.termdefault.as('term_default'),
        termMaximum: lendingLoanproducts.termmaximum.as('term_maximum'),
        termFlexibility: lendingLoanproducts.termflexibility.as('term_flexibility'),
        interestRate: lendingLoanproducts.interestrate.as('interest_rate'),
        pdInterestRate: lendingLoanproducts.pdInterestrate.as('pd_interest_rate'),
        grtRate: lendingLoanproducts.grtRate.as('grt_rate'),
        interestComputation: lendingLoanproducts.interestcomputation.as('interest_computation'),
        diminishingOption: lendingLoanproducts.diminishingOption.as('diminishing_option'),
        daysInAYear: lendingLoanproducts.daysinayear.as('days_in_a_year'),
        requireCoborrower: lendingLoanproducts.requirecoborrower.as('require_coborrower'),
        requiredComakers: lendingLoanproducts.requiredcomakers.as('require_comakers'),
        requireSecurity: lendingLoanproducts.requiresecurity.as('require_security'),
        defaultSecurity: lendingLoanproducts.defaultsecurity.as('default_security'),
        aclExempted: lendingLoanproducts.aclExempted.as('acl_exempted'),
        aclAssessment: lendingLoanproducts.aclAssessment.as('acl_assessment'),
        branchInterestAdj: lendingLoanproductadjustments.interestrate.as('branch_interest_adj'),
        branchScAdj: lendingLoanproductadjustments.scadjustment.as('branch_sc_adj'),

        isOffbook: lendingLoanproducts.isOffbook.as('is_offbook'),

        amortOneUse: lendingLoanproducts.amort1use.as('amort_one_use'),
        amortOneName: lendingLoanproducts.amort1name.as('amort_one_name'),
        deduceOneUse: lendingLoanproducts.deduction1use.as('deduce_one_use'),
        deduceOneName: lendingLoanproducts.deduction1name.as('deduce_one_name'),

        amortTwoUse: lendingLoanproducts.amort2use.as('amort_two_use'),
        amortTwoName: lendingLoanproducts.amort2name.as('amort_two_name'),
        deduceTwoUse: lendingLoanproducts.deduction2use.as('deduce_two_use'),
        deduceTwoName: lendingLoanproducts.deduction2name.as('deduce_two_name'),
      })
      .from(lendingLoanproducts)
      .leftJoin(
        lendingLoanproductstouse,
        eq(lendingLoanproductstouse.loanproductid, lendingLoanproducts.loanproductid),
      )
      .leftJoin(
        lendingLoanproductadjustments,
        eq(lendingLoanproductadjustments.loanproductid, lendingLoanproducts.loanproductid),
      )
      .groupBy(lendingLoanproducts.loanproductid)
  )

export type SavingsProduct = typeof savingsProductsView.$inferSelect

// @SQLVIEW: Savings products
export const savingsProductsView = mysqlView('savings_products_view')
  .as(
    qb => qb
      .select({
        id: savingsProducts.productid.as('id'),
        type: savingsProducts.savingsType.as('type'),
        name: savingsProducts.productname.as('name'),
        code: savingsProducts.productcode.as('code'),
        savingsCategory: savingsProducts.savingscategory.as('savings_category'),
        isTD: savingsProducts.isTD.as('is_td'),
        isMicro: savingsProducts.ismicro.as('is_micro'),
        isWtaxExempt: savingsProducts.isWtaxExempt.as('is_wtax_exempt'),
        interestCrediting: savingsProducts.interestcrediting.as('interest_crediting'),
        interestCreditingBasis: savingsProducts.interestcreditingbasis.as('interest_crediting_basis'),
        daysInAYear: savingsProducts.daysinayear.as('days_in_a_year'),
        rateBracket1: savingsProducts.rateBracket1.as('rate_bracket_1'),
        rateBracket2: savingsProducts.rateBracket2.as('rate_bracket_2'),
        rateBracket3: savingsProducts.rateBracket3.as('rate_bracket_3'),
        rateBracket4: savingsProducts.rateBracket4.as('rate_bracket_4'),
        rate1: savingsProducts.rate1,
        rate2: savingsProducts.rate2,
        rate3: savingsProducts.rate3,
        rate4: savingsProducts.rate4,
        rate5: savingsProducts.rate5,
        balanceToEarn: savingsProducts.balancetoearn.as('balance_to_earn'),
        balanceToEarn2: savingsProducts.balancetoearn2.as('balance_to_earn_2'),
        balanceMin: savingsProducts.balancemin.as('balance_min'),
        balanceMin2: savingsProducts.balancemin2.as('balance_min_2'),
        balanceMinCharge: savingsProducts.balancemincharge.as('balance_min_charge'),
        balanceMinCharge2: savingsProducts.balancemincharge2.as('balance_min_charge2'),
        closeAccountFee: savingsProducts.closeaccountfee.as('close_account_fee'),
        closeAccountFee2: savingsProducts.closeaccountfee2.as('close_account_fee_2'),

        dormancyP: savingsProducts.dormancyP.as('dormancy_p'),
        dormancyNP: savingsProducts.dormancyNP.as('dormancy_np'),
        dormancyChargeP: savingsProducts.dormancychargeP.as('dormancy_charge_p'),
        dormancyChargeNP: savingsProducts.dormancychargeNP.as('dormancy_charge_np'),

        glCode: savingsProducts.glcode.as('gl_code'),
        ieGlCode: savingsProducts.ieglcode.as('ie_gl_code'),
      })
      .from(savingsProducts)
      .leftJoin(
        savingsProductstouse,
        eq(savingsProductstouse.productid, savingsProducts.productid),
      )
      .groupBy(savingsProducts.productid)
  )

export type CreditlineProduct = typeof creditlineProductsView.$inferSelect

// @SQLVIEW: Creditline products 
export const creditlineProductsView = mysqlView('creditline_products_view')
  .as(
    qb => qb
      .select({
        id: lendingCreditlineProduct.creditlineProductid.as('creditline_product_id'),
        type: sql<string>`'credit_line'`.as('product_type'),
        name: lendingCreditlineProduct.creditlineProductname.as('creditline_product_name'),
        description: lendingCreditlineProduct.productdescription.as('description'),
        baseLoanProductId: lendingCreditlineProduct.loanproductid.as('base_loan_product_id'),
        baseLoanProductName: lendingLoanproducts.name.as('base_loan_product_name'),
        maxLimit: lendingCreditlineProduct.creditlineMaxlimit.as('creditline_max_limit'),
        maxTerm: lendingCreditlineProduct.creditlineMaxterm.as('creditline_max_term'),
        requiredCreditlineApprovers: lendingCreditlineProduct.requiredCreditlineapprovers.as('required_creditline_approvers'),
        requiredLoanApprovers: lendingCreditlineProduct.requiredLoanapprovers.as('required_creditline_approvers'),
      })
      .from(lendingCreditlineProduct)
      .leftJoin(
        lendingLoanproducts,
        eq(lendingLoanproducts.loanproductid, lendingCreditlineProduct.loanproductid),
      )
  )

export type InsuranceProduct = typeof insuranceProductsView.$inferSelect

// @SQLVIEW: Insurance products
export const insuranceProductsView = mysqlView('insurance_products_view')
  .as(
    qb => qb
      .select({
        id: insuranceProducts.insuranceproductid.as('id'),
        type: sql<string>`'insurance'`.as('product_type'),
        details: insuranceProducts.productdetails.as('details'),
      })
      .from(insuranceProducts)
  )

export type RBPIProducts = typeof rbpiProductsView.$inferSelect

// @SQLVIEW: Aggregated RBPI products view
export const rbpiProductsView = mysqlView('rbpi_products_view')
  .as(
    // loans
    qb => qb
      .select({
        id: lendingLoanproducts.loanproductid.as('id'),
        productType: sql<string>`'loan'`.as('product_type'),
        name: lendingLoanproducts.name,
        shortName: lendingLoanproducts.shortname.as('short_name'),
        description: lendingLoanproducts.description,
        status: lendingLoanproducts.status,
        interestRate: lendingLoanproducts.interestrate.as('interest_rate'),
        maxAmount: sql<string>`'${lendingLoanproducts.loanamountmaximum}'`.as('max_amount'),
        isEmployeeLoan: lendingLoanproducts.isEmployeeLoan.as('is_employee_loan'),
        isTD: sql<string>`''`.as('is_td'),
        savingsCategory: sql<boolean>`false`.as('savings_category'),
        availableBranches: sql<null>`NULL`.as('available_branches'),
      })
      .from(lendingLoanproducts)

      // savings
      .unionAll(
        qb
          .select({
            id: savingsProducts.productid.as('id'),
            productType: sql<string>`'savings'`.as('product_type'),
            name: savingsProducts.productname.as('name'),
            shortName: savingsProducts.productcode.as('short_name'),
            description: sql<string>`''`.as('description'),
            status: sql<number>`1`.as('status'),
            interestRate: savingsProducts.rate1,
            maxAmount: sql<string>`'0'`.as('max_amount'),
            isEmployeeLoan: sql<number>`0`.as('is_employee_loan'),
            isTD: sql<string>`${savingsProducts.isTD}`.as('is_td'),
            savingsCategory: savingsProducts.savingscategory.as('savings_category'),
            availableBranches: sql<null>`NULL`.as('available_branches'),
          })
          .from(savingsProducts)
          .leftJoin(
            savingsProductstouse,
            eq(savingsProductstouse.productid, savingsProducts.productid),
          )
          .groupBy(savingsProducts.productid)
      )

      // creditline products
      .unionAll(
        qb
          .select({
            id: lendingCreditlineProduct.creditlineProductid.as('id'),
            productType: sql<string>`'creditline'`.as('product_type'),
            name: lendingCreditlineProduct.creditlineProductname.as('name'),
            shortName: sql<string>`''`.as('short_name'),
            description: lendingCreditlineProduct.productdescription.as('description'),
            status: sql<number>`1`.as('status'),
            interestRate: sql<string>`''`.as('interest_rate'),
            maxAmount: lendingCreditlineProduct.creditlineMaxlimit.as('max_amount'),
            isEmployeeLoan: sql<number>`0`.as('is_employee_loan'),
            isTD: sql<string>`''`.as('is_td'),
            savingsCategory: sql<boolean>`false`.as('savings_category'),
            availableBranches: sql<null>`NULL`.as('available_branches'),
          })
          .from(lendingCreditlineProduct)
      )

      // insurances
      .unionAll(
        qb
          .select({
            id: insuranceProducts.insuranceproductid.as('id'),
            productType: sql<string>`'insurance'`.as('product_type'),
            name: sql<string>`'Insurance Product'`.as('name'),
            shortName: sql<string>`''`.as('short_name'),
            description: insuranceProducts.productdetails,
            status: sql<number>`1`.as('status'),
            interestRate: sql<string>`0`.as('interest_rate'),
            maxAmount: sql<string>`'0'`.as('max_amount'),
            isEmployeeLoan: sql<number>`0`.as('is_employee_loan'),
            isTD: sql<string>`''`.as('is_td'),
            savingsCategory: sql<boolean>`false`.as('savings_category'),
            availableBranches: sql<null>`NULL`.as('available_branches'),
          })
          .from(insuranceProducts)
      )
  )