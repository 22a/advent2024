import { readInput } from '../utils/readInput.ts';
const s = readInput(import.meta.url, process.argv.includes('--example'));
const n = s.split('\n').map((r) => {
  const [t, o] = r.split(': ');
  const e = o.split(' ').map(Number);
  return { i: Number(t), t: e };
});
const m = { o: (r, t) => r + t, m: (r, t) => r * t, p: (r, t) => Number(`${r}${t}`) };
const c = (r, t, o, e) => {
  if (o.length === 0) return t === r;
  const [s, ...n] = o;
  const m = e.map((r) => r(t, s));
  return m.some((t) => c(r, t, n, e));
};
let p = n.filter(({ i: r, t: t }) => c(r, 0, t, [m['o'], m['m']]));
let u = p.reduce((r, t) => r + t.i, 0);
console.log('Part 1:', u);
p = n.filter(({ i: r, t: t }) => c(r, 0, t, [m['o'], m['m'], m['p']]));
u = p.reduce((r, t) => r + t.i, 0);
console.log('Part 2:', u);
