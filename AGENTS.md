<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- Company details live in `src/lib/site.ts`; product, service and industry content in `src/lib/catalog.ts` — edit content there, not in pages, so every page stays consistent.
- Enquiry forms submit through public server functions in `src/lib/enquiries.functions.ts` that validate with the shared zod schemas in `src/lib/enquiry-schema.ts` and write with the admin client; tables have RLS on with no public policies so visitors can never read submissions.
- RFQ drawings go to the private `rfq-drawings` bucket via the server function only — never expose a public upload path.
- After an RFQ saves, `src/lib/quote-mail.ts` opens a pre-filled mailto to the company email — no sender domain or Gmail connection exists, so the site cannot send email itself.
