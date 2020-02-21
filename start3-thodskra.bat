cd thodskra
docker stop thjodskra-api
docker rm thjodskra-api
docker run -d -p 3000:3000 --name thjodskra-api --link=postgres:database  thjodskra-api:latest
@ping 127.0.0.1 -n 1 > nul
