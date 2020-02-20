# Rafrænt Ísland
[Repo](https://github.com/guttih/rafraent-island)

## Koma þessum fjórum þjónustum í gang
Framkvæmdu eftirfarandi aðgerðir í eftirfarandi röð


#### keyra gagnagrunn
Opna nýjan command prompt glugga
````
docker stop postgres
docker rm postgres
docker run -p 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres
````

#### Bæta gögnum í gagnagrunninn
Opna nýjan command prompt glugga
````
docker exec -u postgres postgres createdb vinnumalastofnun
docker cp database\vinnumalastofnun/faedingarorlofstekjur.sql postgres:/docker-entrypoint-initdb.d/faedingarorlofstekjur.sql && docker exec -u postgres postgres psql vinnumalastofnun postgres -f docker-entrypoint-initdb.d/faedingarorlofstekjur.sql
docker cp database\vinnumalastofnun/aaetladur_faedingardagur.sql postgres:/docker-entrypoint-initdb.d/aaetladur_faedingardagur.sql && docker exec -u postgres postgres psql vinnumalastofnun postgres -f docker-entrypoint-initdb.d/aaetladur_faedingardagur.sql

docker cp database\thodskra/heimilisfang.sql postgres:/docker-entrypoint-initdb.d/heimilisfang.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/heimilisfang.sql
docker cp database\thodskra/einstaklingar.sql postgres:/docker-entrypoint-initdb.d/einstaklingar.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/einstaklingar.sql
docker cp database\thodskra/foreldri_barn.sql postgres:/docker-entrypoint-initdb.d/foreldri_barn.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/foreldri_barn.sql
docker cp database\thodskra/einstaklingur_heimilisfang.sql postgres:/docker-entrypoint-initdb.d/einstaklingur_heimilisfang.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/einstaklingur_heimilisfang.sql

````
#### Keyra upp thodskra rest containerinn
Opna nýjan command prompt glugga
````
docker rm thjodskra-api
cd thodskra
docker stop thjodskra-api
docker rm thjodskra-api
docker run -p 3000:3000 --name thjodskra-api --link=postgres:database  thjodskra-api:latest
````

#### Keyra upp soap þjónustuna
 1. Opna `vinnumalastofnun\vinnumalastofnun\vinnumalastofnun.sln` í Visual Studio
 2. Ýta á Play

#### Keyra upp rest nodesoap þjónustuna
Opna nýjan command prompt glugga
```
  cd vinnumalastofnun\nodesoap
  npm i && npm start
 ```

