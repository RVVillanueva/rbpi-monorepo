
postgres-core.generate: 
	bunx drizzle-kit generate --config ./db/core/drizzle.config.ts

postgres-core.migrate:
	bunx drizzle-kit migrate --config ./db/core/drizzle.config.ts

postgres-core.studio:
	bunx drizzle-kit studio --config ./db/core/drizzle.config.ts

postgres-core.up:
	bunx drizzle-kit up --config ./db/core/drizzle.config.ts

mysql2-legacy.generate:
	bunx drizzle-kit generate --config ./db/legacy/drizzle.config.ts
	$(MAKE) mysql2-legacy.patch

mysql2-legacy.patch:
	find ./db/legacy/migrations -name "migration.sql" \
		| xargs sed -i \
			-e "s/CREATE ALGORITHM/CREATE OR REPLACE ALGORITHM/g" \
			-e "s/^CREATE VIEW/CREATE OR REPLACE VIEW/g"

mysql2-legacy.restore-migration:
	mysql -h 127.0.0.1 -P3306 -u${DB_USER} -p${DB_PASSWORD} ${DB_NAME} < ./db/legacy/migrations/migrations_snapshot.sql

mysql2-legacy.restore:
	pv ${DB_BACKUP} | gunzip | mysqldump -h 127.0.0.1 -P3306 -u${DB_USER} -p${DB_PASSWORD} ${DB_NAME}

mysql2-legacy.migrate:
	$(MAKE) mysql2-legacy.restore-migration
	bunx drizzle-kit migrate --config ./db/legacy/drizzle.config.ts

mysql2-legacy.check:
	bunx drizzle-kit check --config ./db/legacy/drizzle.config.ts

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

expose:
	CLOUDFLARE_ENV=staging pnpm dev.stage

build:
	CLOUDFLARE_ENV=production pnpm build

email.dev:	
	pnpm email.dev

boot: dev email.dev