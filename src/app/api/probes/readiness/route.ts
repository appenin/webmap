export async function GET() {
  // return json response
  return new Response(JSON.stringify({ state: 'UP' }));
}
