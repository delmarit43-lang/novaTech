SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname IN ('nova_tech', 'nova%20tech', 'nova tech')
  AND pid <> pg_backend_pid();

DROP DATABASE IF EXISTS "nova%20tech";
DROP DATABASE IF EXISTS "nova tech";

ALTER DATABASE nova_tech RENAME TO "nova tech";
