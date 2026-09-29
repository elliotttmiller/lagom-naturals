# Lagom Operations — Project Conventions

Canonical application: `operations/lagom-operations`.

## Architecture

Keep the application modular.

- `app/page.js`: composition, auth/session, route state, data scoping.
- `components/layout`: shared shell only.
- `components/ui`: reusable visual primitives.
- `components/pages`: page-level modules.
- `components/operations`: transactional dialogs/workflows.
- `lib/operationsData.js`: reads + realtime subscriptions.
- `lib/companyOperationsDomain.js`: deterministic business calculations and QA.
- Supabase owns persisted operational data.

Do not move page logic back into one monolithic file.

## Visual reference

The approved Lagom Operations mockups are the design target.

Use:
- dark sidebar shell;
- `DM Serif Display` for editorial page titles;
- `Inter` for UI/body/table text;
- canvas `#FBFAF7`;
- surface `#FFFFFF`;
- border `#E5E7EB`;
- primary text `#0F172A`;
- secondary text `#64748B`;
- restrained green accents;
- black/dark primary actions;
- thin borders and minimal shadows.

Avoid decorative gradients, excessive shadows, pill-heavy UI, oversized icons, or generic SaaS dashboard styling.

## Responsive rules

Validate 375 / 768 / 1440 / 1600 widths.

- Desktop sidebar: 208 px.
- Tablet sidebar may collapse to icon rail.
- Mobile navigation becomes bottom navigation.
- Tables remain semantically complete and may horizontally scroll.
- Touch targets should remain at least ~44 px where practical.
- Keep visible keyboard focus.
- Respect reduced motion.

## Data / business rules

Never invent:
- invoice values;
- depletion values;
- COGS;
- product prices;
- payment terms;
- commission rates;
- bonus rules;
- inventory.

The workbook migration contract lives in `companyOperationsDomain.js`.

## Workflow

Run before merge:

```bash
npm run validate:operations
npm run build
```

Develop through feature branches and pull requests.
