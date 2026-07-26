SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'nova tech'
  AND pid <> pg_backend_pid();

ALTER DATABASE "nova tech" RENAME TO nova_tech;
