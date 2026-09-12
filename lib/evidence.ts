import evidenceJson from "@/data/evidence.json";

export type ClaimStatus = "verified" | "reported" | "estimate" | "source-to-confirm";

export type Claim = {
  id: string;
  claim: string;
  sources: string[];
  status: ClaimStatus;
  lastVerified: string;
  note?: string;
};

const raw = (evidenceJson as { gaps: { number: number; claims: Claim[] }[] }).gaps;

const byGap = new Map(raw.map((g) => [g.number, g.claims]));

export const claimsFor = (n: number): Claim[] => byGap.get(n) ?? [];

export const STATUS_LABEL: Record<ClaimStatus, string> = {
  verified: "verified",
  reported: "reported",
  estimate: "estimate",
  "source-to-confirm": "source to confirm",
};
