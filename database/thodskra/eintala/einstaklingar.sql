--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: einstaklingur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.einstaklingur (
    kennitala character varying(12) NOT NULL,
	nafn character varying NOT NULL,
    faedingardagur timestamp with time zone,
    maki_kennitala character varying(12)
);


ALTER TABLE public.einstaklingur OWNER TO postgres;

--
-- Data for Name: einstaklingur; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('165509042627', 'Samson Raymond', NULL, '164105243424');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('163001035603', 'Seth Tyler', NULL, '169906116315');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('161210097240', 'Joseph Gordon', NULL, '166708077158');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('168411213088', 'Keefe Hoffman', NULL, '160105105340');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('167612226188', 'Bernard Wise', NULL, '165203177315');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('165702224360', 'Daniel Vinson', NULL, '161106093303');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164208038952', 'Michael Bolton', NULL, '168710065395');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('163701112892', 'Nigela Mcmillan', NULL, '162904066798');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('160805027091', 'Rashad Kane', NULL, '169709153028');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('168907185055', 'Xavier Madden', NULL, '169008200892');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('169802086752', 'Elliott Burch', NULL, '166012264005');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164105304911', 'Raja Avery', NULL, '168603034250');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('163611276795', 'Norman Mccarty', NULL, '167201175770');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164105243424', 'Ivory Y. Reese', NULL, '165509042627');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('161803159456', 'Bruce Q. Wiggins', NULL, '162307134177');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('168112074540', 'Stacey O. Patrick', NULL, '162603164134');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('162307134177', 'Paula L. Moreno', NULL, '161803159456');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164301171502', 'Caleb O. Mccarthy', NULL, '164208076325');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('169906116315', 'Allegra E. Sandoval', NULL, '163001035603');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('166708077158', 'Vielka L. Hernandez', NULL, '161210097240');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('160105105340', 'Aiko H. Johnson', NULL, '168411213088');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('165203177315', 'Hedley G. Calderon', NULL, '167612226188');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('161106093303', 'Zenia B. Albert', NULL, '165702224360');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('162603164134', 'Ocean N. Gray', NULL, '168112074540');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('168710065395', 'Whilemina D. Cruz', NULL, '164208038952');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('162904066798', 'Inez Q. Pope', NULL, '163701112892');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('169709153028', 'Pamela D. Chang', NULL, '160805027091');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('169008200892', 'Guinevere R. Farrell', NULL, '168907185055');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('166012264005', 'Kaitlin J. May', NULL, '169802086752');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('168603034250', 'Pascale B. Hull', NULL, '164105304911');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164208076325', 'Hermione W. Mcfarland', NULL, '164301171502');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('167201175770', 'Lani O. Ward', NULL, '163611276795');
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('160108117573', 'Quyn G. Rice', '2019-03-29 19:00:58', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('165402020142', 'Ila T. Mcclain', '2020-01-22 08:09:34', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('161308073715', 'Cassandra N. Workman', '2019-11-30 15:27:38', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('168203182756', 'Kennedy E. Albert', '2019-09-22 22:35:47', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('168004283696', 'Aphrodite G. Weeks', '2019-10-19 21:06:03', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('163211239144', 'Zachery G. Francis', '2019-02-23 06:17:39', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('161602291310', 'Laura V. Sharp', '2020-03-27 22:08:00', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('166112136814', 'Evelyn U. Pate', '2019-02-16 18:17:11', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('169810230921', 'Steven Q. Andrews', '2019-08-05 17:49:00', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('165511272022', 'Yuli X. Schneider', '2020-09-16 09:19:12', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('168510108098', 'Buffy J. Vazquez', '2020-05-20 08:19:44', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('161710291053', 'Elvis S. Adams', '2019-09-12 22:46:55', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164906305679', 'Brandon R. Tanner', '2019-12-29 09:19:12', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('165502151722', 'Hasad P. Cherry', '2020-04-29 07:57:18', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('161204126484', 'Tobias L. Mcleod', '2019-12-16 02:38:46', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('165104298004', 'Shea Y. Abbott', '2020-03-13 14:29:57', NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('169411046932', 'Mr. missing', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('160412199184', 'Mrs. Missing', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164403203237', 'Mr. Missing like crazy', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('161402083164', 'Mr. Missing dude', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164906218732', 'Mr. Missing Odinn', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164408133884', 'Mrs. Missing Freyja', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('167002283583', 'Mr. Missing Thor', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('164001228537', 'Mr. Missing Baldur', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('165208066828', 'Mr. Missing Valdimar', NULL, NULL);
INSERT INTO public.einstaklingur (kennitala, nafn, faedingardagur, maki_kennitala) VALUES ('167005136259', 'Mr. Missing Krokur', NULL, NULL);


--
-- Name: einstaklingur einstaklingur_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.einstaklingur
    ADD CONSTRAINT einstaklingur_pkey PRIMARY KEY (kennitala);


--
-- Name: einstaklingur einstaklingur_maki_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.einstaklingur
    ADD CONSTRAINT einstaklingur_maki_fkey FOREIGN KEY (maki_kennitala) REFERENCES public.einstaklingur(kennitala);


--
-- PostgreSQL database dump complete
--

