ALTER TABLE "organization_profiles" ADD COLUMN "default_country" text;--> statement-breakpoint
ALTER TABLE "organization_profiles" ADD COLUMN "default_state" text;--> statement-breakpoint
ALTER TABLE "organization_profiles" ADD COLUMN "default_city" text;--> statement-breakpoint
ALTER TABLE "organization_profiles" ADD COLUMN "default_postal_code" text;--> statement-breakpoint
ALTER TABLE "organization_profiles" ADD COLUMN "default_address" text;--> statement-breakpoint
ALTER TABLE "organization_profiles" DROP COLUMN "country";--> statement-breakpoint
ALTER TABLE "organization_profiles" DROP COLUMN "state";--> statement-breakpoint
ALTER TABLE "organization_profiles" DROP COLUMN "province";--> statement-breakpoint
ALTER TABLE "organization_profiles" DROP COLUMN "city";--> statement-breakpoint
ALTER TABLE "organization_profiles" DROP COLUMN "postal_code";--> statement-breakpoint
ALTER TABLE "organization_profiles" DROP COLUMN "address";