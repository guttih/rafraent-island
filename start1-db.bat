
docker stop postgres
docker rm postgres
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres
@ping 127.0.0.1 -n 10 > nul