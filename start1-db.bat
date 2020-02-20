
docker stop postgres
docker rm postgres
docker run -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres
