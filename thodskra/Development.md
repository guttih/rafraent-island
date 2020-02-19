

## Docker
Hér er haldið utanum skipanir docker gám þessarar þjónustu.
#### Keyra container thjodskra-api

 - Ef docker er nú í gangi þarf að stoppa hann
   -  `docker rm thjodskra-api`
 - Hér tengjum við við thjodskra-api container við db container
   - `docker run -p 3000:3000 --name thjodskra-api --link=pg:database  thjodskra-api:latest`

### To build docker image
 - Byggja nýjann container
   - `docker build . -t thjodskra-api:latest`
```

## Glósur er varða typeOrm
- Based on [example](https://github.com/prameshbhattarai/express-js-type-orm-postgres)
- [typeorm](https://typeorm.io/#/)
- [EntityManager](https://github.com/typeorm/typeorm/blob/master/docs/entity-manager-api.md)