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
-- Name: logheimili; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logheimili (
    einstaklingur character varying(12) NOT NULL,
    idheimili integer NOT NULL
);


ALTER TABLE public.logheimili OWNER TO postgres;

--
-- Data for Name: logheimili; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164105243424', 1);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('161803159456', 2);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168112074540', 3);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('162307134177', 2);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164301171502', 4);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('169906116315', 5);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('166708077158', 6);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('160105105340', 7);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('165203177315', 8);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('161106093303', 9);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('162603164134', 10);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168710065395', 11);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('162904066798', 12);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('169709153028', 13);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('169008200892', 14);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('166012264005', 15);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168603034250', 16);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164208076325', 4);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('167201175770', 17);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('165509042627', 1);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('162603164134', 3);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('163001035603', 5);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('161210097240', 6);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168411213088', 7);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('167612226188', 8);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('165702224360', 9);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168112074540', 10);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164208038952', 11);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('163701112892', 12);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('160805027091', 13);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168907185055', 14);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('169802086752', 15);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164105304911', 16);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('163611276795', 17);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('160108117573', 4);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('161308073715', 4);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('161710291053', 2);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('161602291310', 2);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('165502151722', 6);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('161204126484', 16);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('165104298004', 2);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('169411046932', 18);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('160412199184', 18);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164403203237', 19);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('161402083164', 20);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164906218732', 21);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164408133884', 22);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('167002283583', 22);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164001228537', 23);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('165208066828', 24);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('167005136259', 25);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('165402020142', 18);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168203182756', 18);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168004283696', 19);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('163211239144', 20);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('166112136814', 21);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('169810230921', 22);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('165511272022', 23);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('168510108098', 24);
INSERT INTO public.logheimili (einstaklingur, idheimili) VALUES ('164906305679', 25);


--
-- Name: logheimili logheimili_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logheimili
    ADD CONSTRAINT logheimili_pkey PRIMARY KEY (einstaklingur, idheimili);


--
-- Name: logheimili logheimili_ideinstaklings_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logheimili
    ADD CONSTRAINT logheimili_ideinstaklings_fkey FOREIGN KEY (einstaklingur) REFERENCES public.einstaklingar(kennitala);


--
-- Name: logheimili logheimili_idheimili_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logheimili
    ADD CONSTRAINT logheimili_idheimili_fkey FOREIGN KEY (idheimili) REFERENCES public.heimilisfong(id);


--
-- PostgreSQL database dump complete
--

