docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kadri/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kadri/app ../..
