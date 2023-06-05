import _package from '../../../../../package.json';

export async function GET() {
  const version = _package.version;
  // return json response
  return new Response(JSON.stringify({ version }));
}
