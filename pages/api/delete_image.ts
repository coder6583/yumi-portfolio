import type { NextApiRequest, NextApiResponse } from "next";
import { del } from "@vercel/blob";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  try {
    console.log(req.body);
    const url = req.body.url;
    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "Missing url" });
    }

    // del() accepts a URL or pathname (or array of them) :contentReference[oaicite:1]{index=1}
    await del(url);

    // note: CDN cache may take up to ~1 minute to fully purge :contentReference[oaicite:2]{index=2}
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Delete failed" });
  }
}
