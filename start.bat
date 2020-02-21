PUSHD .
call start1-db.bat
POPD
PUSHD .
call start2-adddata.bat
POPD
PUSHD .
call start3-thodskra.bat
POPD
PUSHD .
start start4-nodesoap.bat
POPD
PUSHD .
call start5-graphql.bat
POPD
