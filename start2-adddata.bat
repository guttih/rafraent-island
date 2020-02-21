@ping 127.0.0.1 -n 1 > nul
docker exec -u postgres postgres createdb vinnumalastofnun
@ping 127.0.0.1 -n 2 > nul
docker cp database\vinnumalastofnun/faedingarorlofstekjur.sql postgres:/docker-entrypoint-initdb.d/faedingarorlofstekjur.sql && docker exec -u postgres postgres psql vinnumalastofnun postgres -f docker-entrypoint-initdb.d/faedingarorlofstekjur.sql
@ping 127.0.0.1 -n 2 > nul

docker cp database\vinnumalastofnun/aaetladur_faedingardagur.sql postgres:/docker-entrypoint-initdb.d/aaetladur_faedingardagur.sql && docker exec -u postgres postgres psql vinnumalastofnun postgres -f docker-entrypoint-initdb.d/aaetladur_faedingardagur.sql
@ping 127.0.0.1 -n 2 > nul

docker cp database\thodskra/heimilisfang.sql postgres:/docker-entrypoint-initdb.d/heimilisfang.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/heimilisfang.sql
@ping 127.0.0.1 -n 2 > nul

docker cp database\thodskra/einstaklingar.sql postgres:/docker-entrypoint-initdb.d/einstaklingar.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/einstaklingar.sql
@ping 127.0.0.1 -n 2 > nul

docker cp database\thodskra/foreldri_barn.sql postgres:/docker-entrypoint-initdb.d/foreldri_barn.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/foreldri_barn.sql
@ping 127.0.0.1 -n 2 > nul

docker cp database\thodskra/einstaklingur_heimilisfang.sql postgres:/docker-entrypoint-initdb.d/einstaklingur_heimilisfang.sql && docker exec -u postgres postgres psql postgres postgres -f docker-entrypoint-initdb.d/einstaklingur_heimilisfang.sql
@ping 127.0.0.1 -n 2 > nul
