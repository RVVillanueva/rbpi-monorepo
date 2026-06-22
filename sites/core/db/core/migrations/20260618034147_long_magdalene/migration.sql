ALTER TABLE "users" ADD COLUMN "numeric_id" bigint NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_numeric_id_key" UNIQUE("numeric_id");