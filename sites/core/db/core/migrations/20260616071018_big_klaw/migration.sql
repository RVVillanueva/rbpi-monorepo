CREATE TABLE "organization_profiles" (
	"id" serial PRIMARY KEY,
	"uid" text NOT NULL UNIQUE,
	"user_id" text,
	"organization_id" text NOT NULL,
	"name" text NOT NULL,
	"short_name" varchar(6) NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"cover_url" text,
	"logo_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
DROP TABLE "internal_users";--> statement-breakpoint
ALTER TABLE "sessions" ADD COLUMN "state" json;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "default_organization_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_default_organization_id_organizations_id_fkey" FOREIGN KEY ("default_organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT;--> statement-breakpoint
ALTER TABLE "organization_profiles" ADD CONSTRAINT "organization_profiles_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "organization_profiles" ADD CONSTRAINT "organization_profiles_organization_id_organizations_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE;