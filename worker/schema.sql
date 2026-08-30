-- D1 schema. Apply with:
--   npx wrangler d1 execute aifz --remote --file worker/schema.sql

CREATE TABLE IF NOT EXISTS users (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  gh_id       TEXT NOT NULL UNIQUE,
  login       TEXT NOT NULL,
  name        TEXT,
  avatar      TEXT,
  created_at  INTEGER NOT NULL,
  last_seen   INTEGER NOT NULL
);

-- Session tokens are stored hashed: a leaked database row cannot be replayed
-- as a login. The plaintext token exists only in the viewer's cookie.
CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  INTEGER NOT NULL,
  expires_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS sessions_exp  ON sessions(expires_at);

-- One row per user. `version` increments on every accepted write and is what
-- makes a lost update detectable: a client sends the version it read, and a
-- mismatch is rejected rather than silently overwriting another device.
CREATE TABLE IF NOT EXISTS state (
  user_id     INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  version     INTEGER NOT NULL DEFAULT 0,
  updated_at  INTEGER NOT NULL,
  device      TEXT,
  data        TEXT NOT NULL
);

-- A short rolling history, so a bad write is recoverable rather than final.
CREATE TABLE IF NOT EXISTS state_history (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  version     INTEGER NOT NULL,
  saved_at    INTEGER NOT NULL,
  device      TEXT,
  data        TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS hist_user ON state_history(user_id, id DESC);
