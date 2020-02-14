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
-- Name: bornforeldrar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bornforeldrar (
    barn character varying(12) NOT NULL,
    foreldri character varying(12) NOT NULL
);


ALTER TABLE public.bornforeldrar OWNER TO postgres;

--
-- Data for Name: bornforeldrar; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('160108117573', '164301171502');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('160108117573', '164208076325');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('161308073715', '164208076325');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('161710291053', '161803159456');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('161710291053', '162307134177');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('165402020142', '169411046932');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('161308073715', '164301171502');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('168203182756', '160412199184');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('168004283696', '164403203237');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('163211239144', '161402083164');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('161602291310', '161803159456');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('160108117573', '169709153028');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('166112136814', '164906218732');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('169810230921', '164408133884');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('169810230921', '167002283583');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('165511272022', '164001228537');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('168510108098', '165208066828');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('164906305679', '167005136259');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('165502151722', '166708077158');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('165502151722', '161210097240');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('161204126484', '168603034250');
INSERT INTO public.bornforeldrar (barn, foreldri) VALUES ('165104298004', '161803159456');


--
-- Name: bornforeldrar bornforeldrar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bornforeldrar
    ADD CONSTRAINT bornforeldrar_pkey PRIMARY KEY (barn, foreldri);


--
-- Name: bornforeldrar bornforeldrar_idbarns_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bornforeldrar
    ADD CONSTRAINT bornforeldrar_idbarns_fkey FOREIGN KEY (barn) REFERENCES public.einstaklingar(kennitala);


--
-- Name: bornforeldrar bornforeldrar_idforeldri_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bornforeldrar
    ADD CONSTRAINT bornforeldrar_idforeldri_fkey FOREIGN KEY (foreldri) REFERENCES public.einstaklingar(kennitala);


--
-- PostgreSQL database dump complete
--

