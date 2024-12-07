import { readInput as a } from '../utils/readInput.ts';
const s = a(import.meta.url, process.argv.includes('--example'));
const n = s.split('\n').map((r) => {
  const [t, o] = r.split(': ');
  const e = o.split(' ').map(Number);
  return { i: Number(t), t: e };
});
type x = number;
const m = { o: (r: x, t: x) => r + t, m: (r: x, t: x) => r * t, p: (r: x, t: x) => Number(`${r}${t}`) };
const c = (r: x, t: x, o: x[], e = [m['o'], m['m'], m['p']]) => {
  if (o.length === 0) return t === r;
  const [s, ...n] = o;
  return e.map((r) => r(t, s)).some((t) => c(r, t, n, e));
};
console.log(`Part 1: ${n.filter(({ i: r, t: t }) => c(r, 0, t, [m['o'], m['m']])).reduce((r, t) => r + t.i, 0)}`);
console.log(`Part 2: ${n.filter(({ i: r, t: t }) => c(r, 0, t)).reduce((r, t) => r + t.i, 0)}`);
