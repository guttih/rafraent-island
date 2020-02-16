export default interface Context {
  user: { name: string, roles?: string[] };
  loader: any;
}