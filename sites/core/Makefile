
postgres-core.generate: 
	bunx drizzle-kit generate --config ./db/core/drizzle.config.ts

postgres-core.migrate:
	bunx drizzle-kit migrate --config ./db/core/drizzle.config.ts

postgres-core.studio:
	bunx drizzle-kit studio --config ./db/core/drizzle.config.ts

mysql2-legacy.generate: 
	bunx drizzle-kit generate --config ./db/legacy/drizzle.config.ts

mysql2-legacy.migrate:
	bunx drizzle-kit migrate --config ./db/legacy/drizzle.config.ts

mysql2-legacy.studio:
	bunx drizzle-kit studio --config ./db/legacy/drizzle.config.ts

# CAUTION: Running introspect will overwrite the schema.ts inside
# of the migration of legacy... Don't run this unless, there is a
# major update on the RBSoftech database schema.
mysql2-legacy.introspect:
	bunx drizzle-kit introspect --config ./db/legacy/drizzle.config.ts

wrangler.deploy:
	pnpx wrangler deploy
wrangler.tail:
	pnpx wrangler tail

buf.update:
	bunx buf dep update

buf.lint:
	bunx buf lint

buf.generate:
	bunx buf generate

test:
	CLOUDFLARE_ENV=test pnpm test

dev:
	CLOUDFLARE_ENV=development pnpm dev

build:
	CLOUDFLARE_ENV=production pnpm build