import { Suspense } from "react";
import Link from "next/link";
import GapGrid from "@/components/GapGrid";
import Matrix from "@/components/Matrix";

export const metadata = { title: "Gaps · UK Gap Map" };

export default function GapsPage() {
  return (
    <>
      <div className="hero" style={{ paddingBottom: 0 }}>
        <div>
          <h1>Every entry is a brief.</h1>
          <div className="hero-copy">
            Sorted by urgency; filter down to what you could start this week. Behind each card: the dossier,
            the sources, who is attempting it, and the thread. Missing something?{" "}
            <a href="/suggest/">suggest a gap →</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="legend" aria-hidden="true">
            <span>
              <i className="d-open" /> open
            </span>
            <span>
              <i className="d-build" /> in build
            </span>
            <span>
              <i className="d-shipped" /> shipped
            </span>
          </div>
        </div>
      </div>

      <Matrix />

      <div className="payoff">
        <span className="prompt">&gt;</span>
        <span className="line">
          The top-left corner is the pitch: <b>urgent, permissionless, still unclaimed.</b>
        </span>
        <Link href="/gaps/?filter=urgent#gaps" className="btn-green sm">
          show me those
        </Link>
      </div>

      <Suspense fallback={null}>
        <GapGrid />
      </Suspense>
    </>
  );
}
