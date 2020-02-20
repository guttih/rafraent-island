## Docker
Hér er haldið utanum skipanir docker gám þessarar þjónustu.
#### Keyra container nodesoap-api

 - Ef docker er nú í gangi þarf að stoppa hann
   -  `docker rm nodesoap-api`
 - Hér tengjum við við nodesoap-api container við db container
   - `docker run -p 8000:8000 --name nodesoap-api nodesoap-api:latest`

### To build docker image
 - Byggja nýjann container
   - `docker build . -t nodesoap-api:latest`

### Inserta búa til töflur og hlaða inn gögnum gögn
Frá staðsetningu þessarar skrárar á viðkomandi tölvu þarf að geraeftirfarandi skipanir.
```
cd 
docker exec -u postgres postgres createdb vinnumalastofnun
docker cp ../../database\vinnumalastofnun/faedingarorlofstekjur.sql postgres:/docker-entrypoint-initdb.d/faedingarorlofstekjur.sql && docker exec -u postgres postgres psql vinnumalastofnun postgres -f docker-entrypoint-initdb.d/faedingarorlofstekjur.sql
docker cp ../../database\vinnumalastofnun/aaetladur_faedingardagur.sql postgres:/docker-entrypoint-initdb.d/aaetladur_faedingardagur.sql && docker exec -u postgres postgres psql vinnumalastofnun postgres -f docker-entrypoint-initdb.d/aaetladur_faedingardagur.sql
```

## Glósur er varða typeOrm
- Based on [example](https://github.com/prameshbhattarai/express-js-type-orm-postgres)
- [typeorm](https://typeorm.io/#/)
- [EntityManager](https://github.com/typeorm/typeorm/blob/master/docs/entity-manager-api.md)