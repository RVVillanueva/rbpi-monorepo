CREATE TABLE "logs" (
	"id" serial PRIMARY KEY,
	"uid" text NOT NULL UNIQUE,
	"level" text DEFAULT 'info' NOT NULL,
	"event" text NOT NULL,
	"message" text NOT NULL,
	"actor" text,
	"meta" json,
	"trace_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "logs_created_at_idx" ON "logs" ("created_at");--> statement-breakpoint
CREATE INDEX "logs_level_idx" ON "logs" ("level");--> statement-breakpoint
CREATE INDEX "logs_event_idx" ON "logs" ("event");--> statement-breakpoint
CREATE INDEX "logs_trace_id_idx" ON "logs" ("trace_id");--> statement-breakpoint
CREATE INDEX "logs_actor_idx" ON "logs" ("actor");