docker rm thjodskra-api
cd thodskra
docker stop thjodskra-api
docker rm thjodskra-api
docker run -p 3000:3000 --name thjodskra-api --link=postgres:database  thjodskra-api:latest
