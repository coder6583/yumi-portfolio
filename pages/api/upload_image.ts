import type { NextApiRequest, NextApiResponse } from "next";
import { put } from "@vercel/blob";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    // Collect raw body into a Buffer
    const chunks: Uint8Array[] = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // Get content-type (image/jpeg, etc.)
    const contentType =
      req.headers["content-type"] || "application/octet-stream";

    // Choose a filename (you can customize this)
    const extension = contentType.split("/")[1] || "bin";
    const filename = `gallery/${Date.now()}.${extension}`;

    const blob = await put(filename, buffer, {
      contentType,
      access: "public",
    });

    return res.status(200).json({ url: blob.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Upload failed" });
  }
}
