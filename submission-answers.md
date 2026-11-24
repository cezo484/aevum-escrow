# DoraHacks submission answers — Freelance Escrow (Aevum Builder Challenge #1)

Account: mehmet484 (registered solo 19 Nov 2026). Deadline: 11 Dec 2026, 08:00 UTC (11:00 TRT).
Track: Invoice Payments. Demo Day: 15 Dec (top 5 present live, 3–5 min).

## Project

- **Name:** Freelance Escrow
- **Tagline:** Get paid when the work is approved, not before.
- **Description:** A client locks payment in tUSD8 in an escrow contract on
  QDay Aevum testnet. The freelancer delivers the work and marks the invoice
  done. The client approves, and the contract pays the freelancer at once.
  If the deadline passes with no delivery, the client gets a refund. After
  delivery the client has a 3-day dispute window; while disputed the funds
  stay locked, the freelancer can deliver again after rework, the client can
  still approve, and after the window the client can claim a refund. No
  third-party arbiter — the contract enforces the deadlines and the client
  makes the final call.
- **Problem:** Freelancers wait weeks to get paid; clients pay up front and
  hope the work shows up.
- **Architecture:** One Solidity contract (FreelanceEscrow, no owner, no
  upgrade path, reentrancy guard, state changes before token transfers,
  custom errors). Static web page, no build step, no web3 library — plain
  EIP-1193 calls, hand-rolled ABI encoding (tested against `cast calldata`).
- **Core workflows:** create invoice (approve + create) → mark delivered →
  approve + release; refund after timeout; open dispute → re-deliver /
  approve / refund after window.
- **Tech:** Solidity 0.8.24, Foundry, plain JavaScript, QDay Aevum testnet
  (EVM, chain 44005), tUSD8 (ERC-20, 6 decimals).
- **Tests:** forge 19/19, npm 16/16.

## Links

- **GitHub repo (public):** https://github.com/cezo484/aevum-escrow
- **Live demo (GitHub Pages, /docs):** https://cezo484.github.io/aevum-escrow/
  (Pages must be enabled from /docs first — browser step)
- **Contract (verified):** 0xc59097193dc906e1905761a8d4453122184678c0
  https://explorer-test.qday.info/address/0xc59097193dc906e1905761a8d4453122184678c0
- **Deploy tx:** 0x0a4742b5a602ecae5067e411fee6183443a53313e824cd0ae7399379aa26c25e
  (block 4013924)
- **Live flow (all on testnet, see live-flow-20261124.log in the repo):**
  - Invoice 0, 1.0 tUSD8: created → delivered → released
    (create 0x66c322cff9b41552b3e2728ded4cd9e2c5bf5290d069069700141729d9949eaa,
    deliver 0x901da2d29a2cdaf869b393896f797dd1854b20239f363492eaa1c61ad8eae765,
    release 0x286f1faef7307051269c083943943161fd004c042254241d989f8a7613c7d384)
  - Invoice 1, 0.5 tUSD8: deadline passed → refunded
    (refund 0x7621d27327fa743433337941b89ba1e0c89828997e2da6ad99502925769bcf2d)
  - Invoice 3, 0.5 tUSD8: delivered → disputed → released from Disputed
    (dispute 0xb398711b42e5bd38cce0f875ee92b1e30245ef9b0a5c590c0baeb69b0f4ee1b8,
    release 0x6bba5534472d92b8ce922b313f654a391925b5eb2b7b8ca6650fc582ee6a61d5)
  - Final balances: client 3.0 tUSD8, freelancer 2.0 tUSD8, escrow 0.
- **Demo video:** demo/aevum-escrow-demo.mp4 in the repo dir (44s, 1280x720,
  slides + narration; YouTube upload pending — add the link here once live).

## Notes for the submitter

- All amounts are TESTNET tUSD8. No real money anywhere.
- No real name in any hackathon material — cezo484 / mehmet484 only.
- Dockerfile exists but was NOT build-tested (no Docker in the VM); the
  primary demo is the static Pages site, not Docker.
