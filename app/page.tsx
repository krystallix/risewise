import { PrintBar } from "@/components/proposal/PrintBar";
import { Cover } from "@/components/proposal/Cover";
import { TableOfContents } from "@/components/proposal/TableOfContents";
import { Introduction } from "@/components/proposal/Introduction";
import { Background } from "@/components/proposal/Background";
import { Goals } from "@/components/proposal/Goals";
import { Features } from "@/components/proposal/Features";
import { Deliverables } from "@/components/proposal/Deliverables";
import { Timeline } from "@/components/proposal/Timeline";
import { Pricing } from "@/components/proposal/Pricing";
import { Terms } from "@/components/proposal/Terms";
import { Closing } from "@/components/proposal/Closing";

export default function ProposalPage() {
  return (
    <>
      <PrintBar />

      {/* Top padding so pages clear the fixed bar */}
      <div className="proposal-shell" style={{ paddingTop: "60px" }}>
        <Cover />
        <TableOfContents />
        <Introduction />
        <Background />
        <Goals />
        <Features />
        <Deliverables />
        <Timeline />
        <Pricing />
        <Terms />
        <Closing />
      </div>
    </>
  );
}
