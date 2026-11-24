# Aevum testnet deployment record

Challenge: Aevum Builder Challenge #1 (DoraHacks), track: Invoice Payments.
Deadline: submissions close 11 Dec 2026, 08:00 UTC (11:00 TRT).

## Network (verified live 24 Nov 2026, 18:19 TRT)

- Chain ID: 44005 (0xABE5), RPC https://rpc-test.qday.info (live, block ~4,013,179)
- Explorer: https://explorer-test.qday.info (live)
- tUSD8: 0x456569838f1d43009A91ebA4263147Afd7233483, 6 decimals (verified on-chain),
  totalSupply 12,893,000 tUSD8. Mint is restricted (no public mint).
- Faucet: https://faucet.qday.info (live) — 5 tQDAY per claim, once per 24h
  per recipient; recipient must hold ~0.0001 ETH or 1 USDT/USDC on
  Ethereum mainnet. Discord /faucet (verified members, #faucet channel):
  1 tQDAY + 5 tUSD8 per claim, no mainnet check mentioned.

## Deployer

- Address: 0x85E3acd9c91cB20F3421daF8131355672ca7df27
- Key: fresh testnet-only key, created 24 Nov 2026, stored in `.env`
  (mode 600). Never reuse on mainnet.
- Balance at 24 Nov 18:19 TRT: 0 tQDAY.

## Status: DEPLOYED + VERIFIED (24 Nov 2026, ~18:35 TRT)

Faucet claimed by the user in Discord (verified on-chain 24 Nov ~18:30):
deployer held exactly 1.0 tQDAY + 5.0 tUSD8. Deploy broadcast
24 Nov ~18:33 TRT.

## Deployment

- Escrow contract: 0xc59097193dc906e1905761a8d4453122184678c0
- Deploy tx: 0x0a4742b5a602ecae5067e411fee6183443a53313e824cd0ae7399379aa26c25e (block 4013924, status 0x1, gas used 828,324)
- Verified on explorer: YES — Blockscout `is_verified: true`, source present, compiler v0.8.24+commit.e11b9ed9. URL: https://explorer-test.qday.info/address/0xc59097193dc906e1905761a8d4453122184678c0
- Freelancer test key: 0xBc6021a8E1Be08A12eFCEC466d778e75aE07Bd91 (fresh testnet-only key in `.env.freelancer`, mode 600, gitignored; funded 0.01 tQDAY from deployer for gas)
- Flow txs (create / deliver / release / refund): all proven on-chain, see live-flow-20261124.log. Invoice 0 happy path (1.0 tUSD8): create 0x66c322cff9b41552b3e2728ded4cd9e2c5bf5290d069069700141729d9949eaa, deliver 0x901da2d29a2cdaf869b393896f797dd1854b20239f363492eaa1c61ad8eae765, release 0x286f1faef7307051269c083943943161fd004c042254241d989f8a7613c7d384. Invoice 1 refund (0.5 tUSD8, 120s deadline): create 0x7fe918fc1ce5bf754950f4b07d438af52d3eb7137b3abe2d9c2f40254277ec24, refund 0x7621d27327fa743433337941b89ba1e0c89828997e2da6ad99502925769bcf2d. Invoice 3 dispute (0.5 tUSD8): create 0xbf110008a3a1eb11d930c16ea4819ccc51d67adcabe8c4a790fb7442b37c119c, deliver 0x48f33469995a24bd1c7ae3d474ceccc6daa2e16368dda26fef8d635af2ed88fa, dispute 0xb398711b42e5bd38cce0f875ee92b1e30245ef9b0a5c590c0baeb69b0f4ee1b8, release-from-disputed 0x6bba5534472d92b8ce922b313f654a391925b5eb2b7b8ca6650fc582ee6a61d5. (Invoice 2's dispute call returned no tx hash — transient RPC issue; the dispute branch was proven on invoice 3 instead.) Final balances: client 3.0 tUSD8, freelancer 2.0 tUSD8, escrow 0.
- GitHub repo: https://github.com/cezo484/aevum-escrow (public, created via browser 24 Nov ~18:25; Meta Muse AI GitHub App installed). PUSHED 24 Nov ~18:43 TRT via connector: commit 066af69fba6dcf068361ff6fbf5c1cec50586603, 30 text files on main (binaries excluded: demo mp4/wav/pngs are not pushable via the connector — same as ListingCheck). Local commit 97daca7 matches content.
- GitHub Pages demo: _pending — enable Pages from /docs via the browser (needs parent/browser agent); expected URL https://cezo484.github.io/aevum-escrow/_
- Demo video: demo/aevum-escrow-demo.mp4 (44s, 1280x720, slides + Piper en_US-lessac-medium narration). NOTE: slide-based, not a live screencast with wallet popups as demo-video-script.md envisioned — a live screencast needs the browser + a wallet; parent to decide. YouTube upload pending (browser).
- DoraHacks submission: _pending — needs parent/browser agent (account mehmet484, registered solo 19 Nov). Submission facts in submission-answers.md._

## Tests (24 Nov 2026, re-verified)

- forge test: 19/19 pass.
- npm test: 16/16 pass.
- npm run demo: offline walkthrough runs clean.
- npm run serve: page serves (index 200, app.js 200).
- npm run pages: docs/ bundle builds, all modules syntax-checked.
