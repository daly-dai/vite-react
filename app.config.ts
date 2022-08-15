import { resolve } from "path";

const alias = {
  "@": resolve(__dirname, "src"),
  '@store': resolve('src/store'),
  '@router': resolve('src/router'),
  '@hooks': resolve('src/hooks'),
  '@pages': resolve('src/pages'),
  '@types': resolve('src/types'),
  '@components': resolve('src/packages/components'),
  "@utils": resolve('src/utils'),
  '@assets': resolve('src/assets'),
  '@config': resolve('src/config'),
  '@service': resolve('src/service'),
  '@packages': resolve('src/packages'),
  '@plugins': resolve('src/plugins')
}

const headers = []

export { headers, alias }
