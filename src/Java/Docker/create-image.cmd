docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kadri-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kadri-java/app ../../..
