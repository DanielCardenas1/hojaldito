import { Suspense } from "react";
import SocioGanadorClient from "./SocioGanadorClient";

export default function SocioGanadorPage() {
  return (
    <Suspense fallback={null}>
      <SocioGanadorClient />
    </Suspense>
  );
}
