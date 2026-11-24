# Demo video script — Freelance Escrow on QDay Aevum

Target: ~2 minutes, screen recording of the live Pages demo on
testnet, English narration (Piper TTS, en_US-lessac-medium).
Record AFTER the contract is deployed and the escrow address is in
config.js + docs/ rebuilt. All amounts are testnet tUSD8.

## Shots

1. (0:00–0:15) Title card: "Freelance Escrow — get paid when the work
   is approved, not before." Show the live demo page URL and the
   Aevum testnet badge.
2. (0:15–0:40) Client view: connect wallet, create an invoice —
   freelancer address, 10 tUSD8, deadline tomorrow. Show the approve
   transaction, then the create transaction, each with its explorer
   link. Narrate: "The client locks payment in the contract first.
   No work, no pay — but the money is already there."
3. (0:40–1:00) Freelancer view: switch account, invoice shows as
   Created. Click "Mark delivered". Show the transaction. Narrate:
   "The freelancer delivers and marks it done before the deadline."
4. (1:00–1:25) Client view again: invoice shows Delivered. Click
   "Approve and release". Show the freelancer's tUSD8 balance before
   and after. Narrate: "The client approves, and the contract pays
   the freelancer. No middleman, no waiting for an invoice run."
5. (1:25–1:50) Refund path: a second invoice, deadline passed, no
   delivery. Client clicks refund, funds come back. Narrate: "If the
   work never arrives, the deadline refunds the client
   automatically. The rules are in the contract."
6. (1:50–2:00) Closing card: repo URL, contract address, explorer
   link. "Built for Aevum Builder Challenge #1. Invoice Payments."

## Narration (full text, read as written)

"Freelancers wait weeks to get paid. Clients pay up front and hope
the work shows up. Freelance Escrow fixes both sides with one
contract on QDay Aevum. The client locks payment in tUSD8 first, so
the freelancer knows the money is real. The freelancer delivers and
marks the invoice done. The client approves, and the contract pays
out at once. If the work never arrives, the deadline refunds the
client. Disputes get three days, and the funds stay locked until
they resolve. No middleman, no waiting, no trust needed — the rules
are in the contract. Try it on the Aevum testnet; the code is open
source, link below."

## Production notes

- Record the browser at 1280x720. Keep the wallet popups visible;
  they are part of the flow.
- Use two test accounts (client + freelancer) in the same wallet,
  switching between them. Fund both from the faucet before recording.
- Label every amount TESTNET in the captions.
- Export as demo/aevum-escrow-demo.mp4, upload to YouTube
  (unlisted), link it in the DoraHacks submission.
