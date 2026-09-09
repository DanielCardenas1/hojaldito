import { Suspense } from "react";
import VenderClient from "./VenderClient";

export default function VenderPage() {
  return (
    <Suspense fallback={null}>
      <VenderClient />
    </Suspense>
  );
}
