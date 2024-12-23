import { list } from '@vercel/blob';

export async function GET(request) {
  const { blobs } = await list();
  const files = blobs.filter(blob => 
    blob.pathname.includes("Competition/Crit/")
  );

  return Response.json(files);
}