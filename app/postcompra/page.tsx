import { Suspense } from "react";
import PostcompraClient from "./PostcompraClient";

export default function PostcompraPage() {
  return (
    <Suspense fallback={null}>
      <PostcompraClient />
    </Suspense>
  );
}
