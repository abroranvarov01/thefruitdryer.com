import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "nesco-fd-5tc",
  "cosori-cp267-fd",
  "excalibur-3926tcdb",
  "magic-mill-mfd-6100",
  "presto-06300",
  "hamilton-beach-32100a",
  "tribest-sedona-express",
  "chefman-food-dehydrator",
  "ivation-10-tray",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://packraftery.shop")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("fruit", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/tery"],
};
