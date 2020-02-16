--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1 (Debian 12.1-1.pgdg100+1)
-- Dumped by pg_dump version 12.0

-- Started on 2020-02-16 11:49:56

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
-- TOC entry 2958 (class 1262 OID 13408)
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
-- TOC entry 2952 (class 0 OID 24628)
-- Dependencies: 206
-- Data for Name: einstaklingar; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('163001035603', 'Seth Tyler', '169906116315', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161210097240', 'Joseph Gordon', '166708077158', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('168411213088', 'Keefe Hoffman', '160105105340', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('167612226188', 'Bernard Wise', '165203177315', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('165702224360', 'Daniel Vinson', '161106093303', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164208038952', 'Michael Bolton', '168710065395', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('163701112892', 'Nigela Mcmillan', '162904066798', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('160805027091', 'Rashad Kane', '169709153028', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('168907185055', 'Xavier Madden', '169008200892', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('169802086752', 'Elliott Burch', '166012264005', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164105304911', 'Raja Avery', '168603034250', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('163611276795', 'Norman Mccarty', '167201175770', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164105243424', 'Ivory Y. Reese', '165509042627', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161803159456', 'Bruce Q. Wiggins', '162307134177', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('168112074540', 'Stacey O. Patrick', '162603164134', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('162307134177', 'Paula L. Moreno', '161803159456', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164301171502', 'Caleb O. Mccarthy', '164208076325', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('169906116315', 'Allegra E. Sandoval', '163001035603', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('166708077158', 'Vielka L. Hernandez', '161210097240', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('160105105340', 'Aiko H. Johnson', '168411213088', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('165203177315', 'Hedley G. Calderon', '167612226188', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161106093303', 'Zenia B. Albert', '165702224360', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('162603164134', 'Ocean N. Gray', '168112074540', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('168710065395', 'Whilemina D. Cruz', '164208038952', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('162904066798', 'Inez Q. Pope', '163701112892', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('169709153028', 'Pamela D. Chang', '160805027091', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('169008200892', 'Guinevere R. Farrell', '168907185055', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('166012264005', 'Kaitlin J. May', '169802086752', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('168603034250', 'Pascale B. Hull', '164105304911', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164208076325', 'Hermione W. Mcfarland', '164301171502', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('167201175770', 'Lani O. Ward', '163611276795', NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('169411046932', 'Mr. missing', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('160412199184', 'Mrs. Missing', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164403203237', 'Mr. Missing like crazy', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161402083164', 'Mr. Missing dude', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164906218732', 'Mr. Missing Odinn', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164408133884', 'Mrs. Missing Freyja', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('167002283583', 'Mr. Missing Thor', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164001228537', 'Mr. Missing Baldur', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('165208066828', 'Mr. Missing Valdimar', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('167005136259', 'Mr. Missing Krokur', NULL, NULL);
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('165509042627', 'Samson Raymond', '164105243424', '2003-12-02 16:40:57');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('160108117573', 'Quyn G. Rice', NULL, '2019-03-29 19:00:58');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('165402020142', 'Ila T. Mcclain', NULL, '2020-01-22 08:09:34');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161308073715', 'Cassandra N. Workman', NULL, '2019-11-30 15:27:38');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('168203182756', 'Kennedy E. Albert', NULL, '2019-09-22 22:35:47');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('168004283696', 'Aphrodite G. Weeks', NULL, '2019-10-19 21:06:03');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('163211239144', 'Zachery G. Francis', NULL, '2019-02-23 06:17:39');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161602291310', 'Laura V. Sharp', NULL, '2020-03-27 22:08:00');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('166112136814', 'Evelyn U. Pate', NULL, '2019-02-16 18:17:11');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('169810230921', 'Steven Q. Andrews', NULL, '2019-08-05 17:49:00');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('165511272022', 'Yuli X. Schneider', NULL, '2020-09-16 09:19:12');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('168510108098', 'Buffy J. Vazquez', NULL, '2020-05-20 08:19:44');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161710291053', 'Elvis S. Adams', NULL, '2019-09-12 22:46:55');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('164906305679', 'Brandon R. Tanner', NULL, '2019-12-29 09:19:12');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('165502151722', 'Hasad P. Cherry', NULL, '2020-04-29 07:57:18');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161204126484', 'Tobias L. Mcleod', NULL, '2019-12-16 02:38:46');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('165104298004', 'Shea Y. Abbott', NULL, '2020-03-13 14:29:57');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161108714579', 'Guðjón Hólm Sigurðsson', NULL, '1917-11-08 12:13:13');
INSERT INTO public.einstaklingar (kennitala, nafn, maki, faedingardagur) VALUES ('161302082150', 'Sóley Guðjónsdóttir', NULL, '2008-02-08 08:01:02');


-- Completed on 2020-02-16 11:49:56

--
-- PostgreSQL database dump complete
--

