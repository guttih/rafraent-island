--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1 (Debian 12.1-1.pgdg100+1)
-- Dumped by pg_dump version 12.0

-- Started on 2020-02-16 12:12:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- TOC entry 2962 (class 1262 OID 13408)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2956 (class 0 OID 33238)
-- Dependencies: 218
-- Data for Name: einstaklingur_logheimili_heimilisfang; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164105243424', 1);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('161803159456', 2);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168112074540', 3);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('162307134177', 2);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164301171502', 4);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('169906116315', 5);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('166708077158', 6);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('160105105340', 7);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('165203177315', 8);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('161106093303', 9);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('162603164134', 10);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168710065395', 11);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('162904066798', 12);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('169709153028', 13);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('169008200892', 14);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('166012264005', 15);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168603034250', 16);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164208076325', 4);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('167201175770', 17);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('165509042627', 1);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('162603164134', 3);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('163001035603', 5);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('161210097240', 6);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168411213088', 7);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('167612226188', 8);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('165702224360', 9);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168112074540', 10);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164208038952', 11);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('163701112892', 12);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('160805027091', 13);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168907185055', 14);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('169802086752', 15);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164105304911', 16);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('163611276795', 17);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('160108117573', 4);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('161308073715', 4);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('161710291053', 2);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('161602291310', 2);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('165502151722', 6);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('161204126484', 16);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('165104298004', 2);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('169411046932', 18);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('160412199184', 18);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164403203237', 19);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('161402083164', 20);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164906218732', 21);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164408133884', 22);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('167002283583', 22);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164001228537', 23);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('165208066828', 24);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('167005136259', 25);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('165402020142', 18);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168203182756', 18);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168004283696', 19);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('163211239144', 20);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('166112136814', 21);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('169810230921', 22);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('165511272022', 23);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('168510108098', 24);
INSERT INTO public.einstaklingur_logheimili_heimilisfang ("einstaklingurKennitala", "heimilisfangId") VALUES ('164906305679', 25);


-- Completed on 2020-02-16 12:12:25

--
-- PostgreSQL database dump complete
--

