

## Docker
Hér er haldið utanum skipanir docker gám þessarar þjónustu.
#### Keyra container thjodskra-api

 - Ef docker er nú í gangi þarf að stoppa hann
   -  `docker rm thjodskra-api`
 - Hér tengjum við við thjodskra-api container við db container
   - `docker run -p 3000:3000 --name thjodskra-api --link=postgres:database  thjodskra-api:latest`

### To build docker image
 - Byggja nýjann container
   - `docker build . -t thjodskra-api:latest`

### Inserta búa til töflur og hlaða inn gögnum gögn
Staðsetja sig á viðkomandi tölvu þar sem  sql scripturnar eru með `cd` skipunninni. og gera svo eftirfarandi fyrir scripturnar.
```
docker cp ./heimilisfang.sql postgres:/docker-entrypoint-initdb.d/heimilisfang.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/heimilisfang.sql
docker cp ./einstaklingar.sql postgres:/docker-entrypoint-initdb.d/einstaklingar.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/einstaklingar.sql
docker cp ./foreldri_barn.sql postgres:/docker-entrypoint-initdb.d/foreldri_barn.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/foreldri_barn.sql
docker cp ./einstaklingur_heimilisfang.sql postgres:/docker-entrypoint-initdb.d/einstaklingur_heimilisfang.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/einstaklingur_heimilisfang.sql

docker cp ./faedingarorlofstekjur.sql postgres:/docker-entrypoint-initdb.d/faedingarorlofstekjur.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/faedingarorlofstekjur.sql
docker cp ./aaetladur_faedingardagur.sql postgres:/docker-entrypoint-initdb.d/heimilisaaetladur_faedingardagurfang.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/aaetladur_faedingardagur.sql
```



## Glósur er varða typeOrm
- Based on [example](https://github.com/prameshbhattarai/express-js-type-orm-postgres)
- [typeorm](https://typeorm.io/#/)
- [EntityManager](https://github.com/typeorm/typeorm/blob/master/docs/entity-manager-api.md)