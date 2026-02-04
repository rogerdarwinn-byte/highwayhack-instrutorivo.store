"use client";

import { MetaPixel } from "@adkit.so/meta-pixel-next";
import { Suspense } from "react";

function PixelProviderInner({ children }: { children: React.ReactNode }) {
  return (
    <MetaPixel
      pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID || "3758939537746940"}
      trackPageViews={true}
    >
      {children}
    </MetaPixel>
  );
}

export function PixelProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <PixelProviderInner>{children}</PixelProviderInner>
    </Suspense>
  );
}
