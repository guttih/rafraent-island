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
-- Name: faedingarorlofstekjur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.faedingarorlofstekjur (
    kennitala character varying(12) NOT NULL,
    personuafslattur real,
    manadartekjur integer,
    adrar_manadartekjur integer,
    vidbotarlifeyrissparnadur real
);


ALTER TABLE public.faedingarorlofstekjur OWNER TO postgres;

--
-- Data for Name: faedingarorlofstekjur; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('166708077158', 0, 465654, 0, 0);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('169506077198', 50, 574051, 50000, 0);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('162901308052', 100, 474171, 100000, 2);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('164208076325', 0, 534492, 150000, 2);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('161902035482', 50, 449061, 200000, 4);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('166208019007', 100, 468345, 0, 4);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('167302110163', 0, 421973, 50000, 0);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('162906300369', 50, 501909, 100000, 0);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('161301175129', 100, 538902, 150000, 2);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('167709041193', 0, 481503, 200000, 2);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('161803159456', 50, 665711, 0, 4);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('160312228315', 100, 519074, 50000, 4);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('161604195378', 0, 569305, 100000, 0);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('164301171502', 50, 479856, 150000, 0);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('167301305681', 100, 522849, 200000, 2);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('160202226460', 0, 590476, 0, 2);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('169804138353', 50, 464688, 50000, 4);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('168908229613', 100, 468638, 100000, 4);
INSERT INTO public.faedingarorlofstekjur (kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur) VALUES ('162307134177', 0, 421711, 150000, 0);


--
-- Name: faedingarorlofstekjur faedingarorlofstekjur_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faedingarorlofstekjur
    ADD CONSTRAINT faedingarorlofstekjur_pkey PRIMARY KEY (kennitala);


--
-- PostgreSQL database dump complete
--

