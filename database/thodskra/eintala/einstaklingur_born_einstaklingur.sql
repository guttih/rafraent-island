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
-- Name: einstaklingur_born_einstaklingur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.einstaklingur_born_einstaklingur (
    "einstaklingurKennitala_1" character varying(12) NOT NULL,
    "einstaklingurKennitala_2" character varying(12) NOT NULL
);


ALTER TABLE public.einstaklingur_born_einstaklingur OWNER TO postgres;

--
-- Data for Name: einstaklingur_born_einstaklingur; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('160108117573', '164301171502');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('160108117573', '164208076325');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('161308073715', '164208076325');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('161710291053', '161803159456');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('161710291053', '162307134177');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('165402020142', '169411046932');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('161308073715', '164301171502');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('168203182756', '160412199184');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('168004283696', '164403203237');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('163211239144', '161402083164');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('161602291310', '161803159456');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('160108117573', '169709153028');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('166112136814', '164906218732');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('169810230921', '164408133884');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('169810230921', '167002283583');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('165511272022', '164001228537');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('168510108098', '165208066828');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('164906305679', '167005136259');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('165502151722', '166708077158');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('165502151722', '161210097240');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('161204126484', '168603034250');
INSERT INTO public.einstaklingur_born_einstaklingur ("einstaklingurKennitala_1", "einstaklingurKennitala_2") VALUES ('165104298004', '161803159456');


--
-- Name: einstaklingur_born_einstaklingur heimilisfeinstaklingur_born_einstaklingur_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.einstaklingur_born_einstaklingur
    ADD CONSTRAINT heimilisfeinstaklingur_born_einstaklingur_pkey PRIMARY KEY ("einstaklingurKennitala_1", "einstaklingurKennitala_2");


--
-- Name: einstaklingur_born_einstaklingur heimilisfeinstaklingur_born_einstaklingur_idbarns_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.einstaklingur_born_einstaklingur
    ADD CONSTRAINT heimilisfeinstaklingur_born_einstaklingur_idbarns_fkey FOREIGN KEY ("einstaklingurKennitala_1") REFERENCES public.einstaklingar(kennitala);


--
-- Name: einstaklingur_born_einstaklingur heimilisfeinstaklingur_born_einstaklingur_idforeldri_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.einstaklingur_born_einstaklingur
    ADD CONSTRAINT heimilisfeinstaklingur_born_einstaklingur_idforeldri_fkey FOREIGN KEY ("einstaklingurKennitala_2") REFERENCES public.einstaklingar(kennitala);


--
-- PostgreSQL database dump complete
--

