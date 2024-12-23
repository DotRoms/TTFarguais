import { list } from "@vercel/blob";

export async function GET(request) {
  const { blobs } = await list(); 

  const files = blobs.filter((blob) =>
    blob.pathname.includes("Gallery/") && (blob.pathname.includes(".JPG") || blob.pathname.includes(".jpg"))
  );
  return Response.json(files);
}