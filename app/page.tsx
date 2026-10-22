import Link from "next/link";
import LiveLog from "@/components/LiveLog";
import StatLine from "@/components/StatLine";
import { committedAttempts } from "@/lib/attempts";
import { domains, gaps } from "@/lib/data";

const perm = (p: string) => gaps.filter((g) => g.permission === p).length;
const shippedCount = new Set(committedAttempts.attempts.filter((a) => a.shipped).map((a) => a.gap)).size;

export default function Home() {
  const vertical = domains.filter((d) => !d.lens && d.gapCount > 0);

  return (
    <>
      <div className="hero">
        <div>
          <StatLine />
          <h1>The UK Gap Map</h1>
          <div className="hero-sub">
            <Link href="/manifesto/">A Logos London Circle initiative →</Link>
          </div>
          <div className="hero-copy">
            A public audit of what Britain is missing. {gaps.length} entries document absent institutions,
            instruments and capabilities across {vertical.length} domains. Each one says what is missing, why
            it matters, what would fill it, and who, if anyone, is building it. {shippedCount} have shipped.
          </div>
          <div className="hero-ctas">
            <Link href="/gaps/" className="btn-green">
              explore all {gaps.length} gaps
            </Link>
            <Link href="/about/" className="hero-more">
              how the map is made →
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <LiveLog />
        </div>
      </div>

      <div className="list-head">
        <span className="title">What the map documents</span>
        <span className="count">every entry a checkable brief</span>
      </div>
      <div className="home-intro">
        <p>
          An entry earns its place by naming something checkable. A fund that closed with no successor. A
          contractor blacklist, live since February 2025, that holds zero entries. A debt-repayment scheme
          legislated in 2018 and never switched on. Each dossier holds the evidence and a concrete, usually
          costed, fill.
        </p>
        <p>
          Underneath sits an audit layer. Factual claims are typed, sourced and dated, weak attributions are
          flagged rather than hidden, and entries carry review-by dates with quarterly re-verification. Where
          the map has been wrong, the correction is public, in the git history.
        </p>
      </div>

      <div className="list-head">
        <span className="title">Build your own future</span>
        <span className="count">BYOF · three tiers · permission is mostly optional</span>
      </div>
      <div className="act-trio">
        <Link href="/gaps/?filter=build-now#gaps" className="act-card">
          <span className="tier bn">build-now · {perm("build-now")}</span>
          <h3>Start this week</h3>
          <p>
            No permission needed. A competent team could start any of these now; the entry is the product
            brief.
          </p>
          <span className="go">browse them →</span>
        </Link>
        <Link href="/dialogue/" className="act-card">
          <span className="tier bt">build-together · {perm("build-together")}</span>
          <h3>Open the dialogue</h3>
          <p>
            No new law: these need a willing council, NHS body, union or regulator at the table. Each carries
            a ready-made institutional brief.
          </p>
          <span className="go">the standing offer →</span>
        </Link>
        <Link href="/act/" className="act-card">
          <span className="tier sl">state-led · {perm("state-led")}</span>
          <h3>Apply the pressure</h3>
          <p>
            Only the state can ship these, but evidence, prototypes and asking loudly are permissionless. Many
            reduce to a commencement order.
          </p>
          <span className="go">ways to act →</span>
        </Link>
      </div>

      <div className="list-head">
        <span className="title">Ways in</span>
        <span className="count">the loop runs on GitHub · no account needed to read</span>
      </div>
      <div className="act-quad">
        <Link href="/gaps/?filter=build-now#gaps" className="act-card">
          <h3>Take a gap</h3>
          <p>
            Claim an entry on GitHub and post milestones as you go. The pipeline runs open, building, shipped,
            and a ship gets verified before it counts. Of the {shippedCount} shipped so far, one came from an
            outside team.
          </p>
          <span className="go">find a gap →</span>
        </Link>
        <Link href="/suggest/" className="act-card">
          <h3>Suggest one</h3>
          <p>
            The map holds what contributors have documented, nothing more. The first outside suggestion became
            №232, and its suggester's team shipped the fill within three months.
          </p>
          <span className="go">suggest a gap →</span>
        </Link>
        <Link href="/gaps/" className="act-card">
          <h3>Challenge a claim</h3>
          <p>
            Every dossier folds out its claims, sources and checking dates. A weak source or a wrong figure is
            a bug; file it on the entry's thread.
          </p>
          <span className="go">open an entry →</span>
        </Link>
        <a href="https://logos.co/activist-leader-steward" className="act-card" rel="noopener noreferrer" target="_blank">
          <h3>Run a circle</h3>
          <p>
            This map came out of a circle: a small group meeting monthly to do the work in front of it. Start
            one where you live.
          </p>
          <span className="go">start here →</span>
        </a>
      </div>

      <div className="list-head">
        <span className="title">What filling one costs</span>
        <span className="count">most entries price their fill and name who could pay</span>
      </div>
      <div className="home-intro">
        <p>
          A national register of surveillance deployments runs £300k to £500k a year. A strategic litigation
          fund needs £3m to £5m. A pooled democracy fund wants £20m a year on ten-year commitments. Entries
          name the money that could do it, from foundations and dormant assets to levies already on the
          statute book. The {perm("build-now")} build-now entries are the ones a funder or a team can move on
          without asking government first.
        </p>
      </div>

      <div className="list-head">
        <span className="title">browse by domain</span>
        <span className="count">
          {vertical.length} domains · <Link href="/gaps/">or all {gaps.length} gaps at once →</Link>
        </span>
      </div>
      <div className="domain-grid home-domains">
        {vertical.map((d) => (
          <Link key={d.slug} href={`/domains/${d.slug}/`} className="domain-card">
            <h3>{d.shortName}</h3>
            <p>{d.gapCount} gaps</p>
          </Link>
        ))}
      </div>

      <div className="payoff amber" style={{ marginBottom: 44 }}>
        <span className="prompt">&gt;</span>
        <span className="line">
          Every entry here is national, so far. The gaps you can see from your own street are not on this map
          yet, because nobody has documented them. <b>Be the first to name a gap in your constituency.</b>
        </span>
        <Link href="/suggest/" className="btn-green sm">
          suggest a local gap
        </Link>
      </div>
    </>
  );
}
