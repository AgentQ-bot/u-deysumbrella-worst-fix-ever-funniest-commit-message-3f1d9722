// u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722 entrypoint
// (Node 22, standard library only).
// Writes the commit message to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt inside the grader).
// The output directory is created first, so the write works on a fresh
// output path as well as on the grader's mounted /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// 73 characters, inside the 100-character cap.
const LINE = 'fix(login): users can no longer log in, so they can no longer hit the bug';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
