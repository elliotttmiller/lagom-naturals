-- ============================================================
-- Lagom CRM - Maps setup. Run once in the Supabase SQL Editor.
-- Adds the columns the Territory Map, Routes, and by-county
-- territories need. Geocoding (Setup tab -> Geocode all accounts)
-- then fills latitude, longitude, and county for every account.
-- ============================================================
BEGIN;

ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS latitude  double precision;
ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS longitude double precision;
ALTER TABLE public.prospects ADD COLUMN IF NOT EXISTS county    text;

COMMIT;
