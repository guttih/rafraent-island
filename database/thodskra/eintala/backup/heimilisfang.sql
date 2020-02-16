--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1 (Debian 12.1-1.pgdg100+1)
-- Dumped by pg_dump version 12.0

-- Started on 2020-02-16 12:13:28

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
-- TOC entry 2960 (class 1262 OID 13408)
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
-- TOC entry 2954 (class 0 OID 33146)
-- Dependencies: 215
-- Data for Name: heimilisfang; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.heimilisfang (id, postfang) VALUES (1, '1082 Felis. St.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (2, 'Ap #232-8701 Rutrum, St.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (3, 'Ap #857-8375 Et, Av.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (4, '377-8970 Vitae Rd.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (5, 'P.O. Box 641, 4574 Erat, Rd.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (6, 'P.O. Box 157, 6293 Vulputate, Street');
INSERT INTO public.heimilisfang (id, postfang) VALUES (7, '638-2380 Turpis Road');
INSERT INTO public.heimilisfang (id, postfang) VALUES (8, '726-7435 Mauris St.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (9, '1146 Semper St.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (10, '715-8487 Odio Rd.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (11, '161-1241 Mollis Rd.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (12, 'Ap #641-1757 Ut Av.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (13, '2339 Lorem Av.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (14, '769-7373 Vitae, St.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (15, 'P.O. Box 383, 5321 Donec Street');
INSERT INTO public.heimilisfang (id, postfang) VALUES (16, 'Ap #245-4878 Et Avenue');
INSERT INTO public.heimilisfang (id, postfang) VALUES (17, 'P.O. Box 597, 7147 Euismod Av.');
INSERT INTO public.heimilisfang (id, postfang) VALUES (18, 'Vantargata 1');
INSERT INTO public.heimilisfang (id, postfang) VALUES (19, 'Vantargata 2');
INSERT INTO public.heimilisfang (id, postfang) VALUES (20, 'Vantargata 3');
INSERT INTO public.heimilisfang (id, postfang) VALUES (21, 'Vantargata 4');
INSERT INTO public.heimilisfang (id, postfang) VALUES (22, 'Vantargata 5');
INSERT INTO public.heimilisfang (id, postfang) VALUES (23, 'Vantargata 6');
INSERT INTO public.heimilisfang (id, postfang) VALUES (24, 'Vantargata 7');
INSERT INTO public.heimilisfang (id, postfang) VALUES (25, 'Vantargata 8');


--
-- TOC entry 2963 (class 0 OID 0)
-- Dependencies: 214
-- Name: heimilisfang_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.heimilisfang_id_seq', 2, true);


-- Completed on 2020-02-16 12:13:28

--
-- PostgreSQL database dump complete
--

