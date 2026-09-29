// Server-side geocoder using the Google Geocoding API.
// Returns latitude/longitude AND county for each address in one pass.
// Runs on the server (Vercel), where outbound requests are allowed.
// Body: { addresses: [{ id, address }] }  ->  { results: [{ id, lat, lng, county }] }
export const runtime = 'nodejs';
export const maxDuration = 60;

async function geocodeOne(address, key) {
  const url =
    'https://maps.googleapis.com/maps/api/geocode/json' +
    `?address=${encodeURIComponent(address)}` +
    '&components=country:US|administrative_area:MN' +
    `&key=${key}`;
  try {
    const r = await fetch(url);
    const j = await r.json();
    const res = j?.results?.[0];
    if (!res) return null;
    const loc = res.geometry?.location;
    let county = null;
    for (const c of res.address_components || []) {
      if ((c.types || []).includes('administrative_area_level_2')) {
        county = (c.long_name || '').replace(/\s+County$/i, '').trim() || null;
      }
    }
    if (!loc) return null;
    return { lat: loc.lat, lng: loc.lng, county };
  } catch (_) {
    return null;
  }
}

export async function POST(req) {
  try {
    const key = process.env.GOOGLE_MAPS_API_KEY;
    if (!key) {
      return Response.json(
        { error: 'GOOGLE_MAPS_API_KEY is not set. Add it in Vercel → Settings → Environment Variables.' },
        { status: 500 }
      );
    }

    const { addresses } = await req.json();
    if (!Array.isArray(addresses) || !addresses.length) {
      return Response.json({ results: [] });
    }

    const results = [];
    const CONCURRENCY = 10;
    for (let i = 0; i < addresses.length; i += CONCURRENCY) {
      const chunk = addresses.slice(i, i + CONCURRENCY);
      const settled = await Promise.all(
        chunk.map(async (a) => {
          const g = a?.address ? await geocodeOne(a.address, key) : null;
          return g
            ? { id: a.id, lat: g.lat, lng: g.lng, county: g.county }
            : { id: a?.id, lat: null, lng: null, county: null };
        })
      );
      results.push(...settled);
    }

    return Response.json({ results });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
