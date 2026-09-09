import { Suspense } from "react";
import ComprarClient from "./ComprarClient";

export default function ComprarPage() {
  return (
    <Suspense fallback={null}>
      <ComprarClient />
    </Suspense>
  );
}
