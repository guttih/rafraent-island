--delete drop 
--delete from public.einstaklingur_heimilisfang;
--delete from public.foreldri_barn;
--delete from public.einstaklingur;
--delete from public.heimilisfang;

--DROP TABLE public.einstaklingur_heimilisfang;
--DROP TABLE public.foreldri_barn;
--DROP TABLE public.einstaklingur;
--DROP TABLE public.heimilisfang;

-- query
--select eh.heimilisfangId from einstaklingur e
--join einstaklingur_heimilisfang eh on e.kennitala = eh.kennitala
 --kennitala "heimilisfangId"
 
-- get allir sem eiga heima á póstfangi 1
SELECT * from einstaklingur_heimilisfang eh
join einstaklingur e on e.kennitala = eh.kennitala
join heimilisfang h on h.id = eh.heimilisfang_id
where eh.heimilisfang_id = 1


-- get foreldrar of soley 161302082150
Select * from foreldri_barn fb
join einstaklingur e on e.kennitala = fb.foreldri_kennitala
where barn_kennitala = '161302082150'
