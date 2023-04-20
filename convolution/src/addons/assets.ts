const TEXTURE_URL = './src/assets/textures/'

export type TAsset = {
  name: string,
  type: 'model' | 'texture' | 'hdr',
  path: string
}

export const assets: Array<TAsset> = [
  {
    name: "sprite1",
    type: "texture",
    path: TEXTURE_URL + 'sprite1.png'
  }
]