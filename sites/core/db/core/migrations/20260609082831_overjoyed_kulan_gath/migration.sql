CREATE TABLE "internal_users" (
	"id" serial PRIMARY KEY,
	"uid" text NOT NULL UNIQUE,
	"userId" text NOT NULL,
	CONSTRAINT "internal_users_userId_id_unique" UNIQUE("userId","id")
);
--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "isAnonymous" TO "is_anonymous";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_key" UNIQUE("username");--> statement-breakpoint
ALTER TABLE "internal_users" ADD CONSTRAINT "internal_users_userId_users_id_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE;