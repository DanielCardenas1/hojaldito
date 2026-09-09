"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useExperience } from "@/lib/experience/context";
import { resolveEntryContext } from "@/lib/experience/entries";
import { venderRoute } from "@/lib/routes/vender";
import RouteRunner from "@/components/experience/RouteRunner";

export default function VenderClient() {
  const searchParams = useSearchParams();
  const { dispatch } = useExperience();
  const applied = useRef(false);

  useEffect(() => {
    if (applied.current) return;
    applied.current = true;
    const ctx = resolveEntryContext(searchParams.get("src"));
    if (ctx) dispatch({ type: "SET_ENTRY_CONTEXT", payload: ctx });
  }, [searchParams, dispatch]);

  return <RouteRunner route={venderRoute} />;
}
