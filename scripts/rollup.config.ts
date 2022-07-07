import {
  packages
} from "../meta/packages";
import type { OutputOptions, Plugin, RollupOptions } from 'rollup'
import ts from "rollup-plugin-ts";
import dts from 'rollup-plugin-dts'

const configs: RollupOptions[] = []

for (const {
  name
} of packages) {

  const input:string = `packages/${name}/index.ts`
  configs.push({
    input,
    output: [{
      file: `packages/${name}/dist/index.cjs`,
      format: 'cjs',
    },
    {
      file: `packages/${name}/dist/index.mjs`,
      format: 'es',
    }
    ],
    plugins: [
      ts(),
    ]
  })
  configs.push({
    input,
    output: {
      file: `packages/${name}/dist/index.d.ts`,
      format: 'es',
    },
    plugins: [
      ts(),
      dts(),
    ]
  })

}

export default configs
