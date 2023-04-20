import { emitEvent } from "src/addons/event"

import Loader from './Loader';
export type TAsset = {
  name: string,
  type: 'model' | 'texture' | 'hdr',
  path: string
}

class Resources {

  public items: any;
  private loader: Loader;
  private queue: number;
  private loaded: number;

  constructor(private readonly assets: Array<TAsset>) {
    this.items = {};
    this.loader = new Loader();
    this.queue = assets.length;
    this.loaded = 0;

    this.preload()
      .then(() => {
        console.log(this.items)
        emitEvent('eResourcesReady');
      })
  }

  private async preload(): Promise<void> {
    for (const asset of this.assets) {
      if (asset.type === 'texture') {
        await this.loader.loaderTexture(asset.path).then((result) => {
          this.save(asset, result);
        })
      }
    }
  }

  private save(asset: TAsset, result: any): void {
    this.items[asset.name] = result;
    this.loaded++;
    if (this.loaded === this.queue) {
      return;
    }
  }
}

export default Resources;