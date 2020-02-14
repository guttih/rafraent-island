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
-- Name: aaetladir_faedingardagar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aaetladir_faedingardagar (
    kennitala character varying(12) NOT NULL,
    dagsetning date NOT NULL
);


ALTER TABLE public.aaetladir_faedingardagar OWNER TO postgres;

--
-- Data for Name: aaetladir_faedingardagar; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('160105105340', '2020-05-14');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('160805027091', '2020-07-18');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('161106093303', '2020-06-23');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('161210097240', '2020-07-30');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('161803159456', '2020-05-02');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('162307134177', '2020-05-02');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('162603164134', '2020-05-14');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('162904066798', '2020-06-16');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('163001035603', '2020-07-28');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('163611276795', '2020-06-06');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('163701112892', '2020-06-16');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('164105243424', '2020-07-29');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('164105304911', '2020-07-03');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('164208038952', '2020-07-11');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('164208076325', '2020-05-28');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('164301171502', '2020-05-28');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('165203177315', '2020-05-21');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('165509042627', '2020-07-29');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('165702224360', '2020-06-23');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('166012264005', '2020-07-20');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('166708077158', '2020-07-30');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('167201175770', '2020-06-06');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('167612226188', '2020-05-21');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('168112074540', '2020-05-14');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('168411213088', '2020-05-14');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('168603034250', '2020-07-03');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('168710065395', '2020-07-11');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('168907185055', '2020-05-30');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('169008200892', '2020-05-30');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('169709153028', '2020-07-18');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('169802086752', '2020-07-20');
INSERT INTO public.aaetladir_faedingardagar (kennitala, dagsetning) VALUES ('169906116315', '2020-07-28');


--
-- Name: aaetladir_faedingardagar aaetladur_faedingardagur_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aaetladir_faedingardagar
    ADD CONSTRAINT aaetladur_faedingardagur_pkey PRIMARY KEY (kennitala);


--
-- PostgreSQL database dump complete
--

