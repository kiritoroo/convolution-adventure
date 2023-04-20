export const getImageData = (image: any): ImageData => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext("2d");
  canvas.width = image.width;
  canvas.height = image.height;
  ctx?.drawImage(image, 0, 0)
  return ctx?.getImageData(0, 0, image.width, image.height)!;
}

export const arr2canvas = (matrix: Array<Array<number>>, cw=50, ch=50) => {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute'
  canvas.style.top = '10%'
  canvas.style.left = '10%'

  canvas.width = cw;
  canvas.height = ch;
  const ctx = canvas.getContext('2d')!;
  
  const minVal = Math.min(...matrix.flat());
  const maxVal = Math.max(...matrix.flat());

  const cellSize = Math.min(cw / matrix[0].length, ch / matrix.length);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const originalValue  = matrix[i][j];
      const pixelValue = (originalValue - minVal) / (maxVal - minVal) * 255;
      const color = `rgb(${pixelValue},${pixelValue},${pixelValue})`;
      ctx.fillStyle = color;
      ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
    
      // draw mag value
      ctx.font = '8px Arial';
      ctx.fillStyle = '#00ff00';
      const text2 = Math.floor(originalValue).toString();
      ctx.fillText(text2, i * cellSize, j * cellSize + 10);
      ctx.fillStyle = '#000';
    }
  }

  document.body.appendChild(canvas);
}

export const draw2canvas = (matrix: Array<Array<number>>, canvas: HTMLCanvasElement) => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const minVal = Math.min(...matrix.flat());
  const maxVal = Math.max(...matrix.flat());

  const cellSize = Math.min(canvas.width / matrix[0].length, canvas.height / matrix.length);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const originalValue  = matrix[i][j];
      const pixelValue = (originalValue - minVal) / (maxVal - minVal) * 255;
      const color = `rgb(${pixelValue},${pixelValue},${pixelValue})`;
      ctx.fillStyle = color;
      ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

export const img2arr = (img: HTMLImageElement): Array<Array<number>> => {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const data = imageData.data;
  const w = imageData.width;
  const h = imageData.height;
  const pixels = new Array(w);
  for (let i = 0; i < w; i++) {
    pixels[i] = new Array(h);
    for (let j = 0; j < h; j++) {
      const offset = (j * w + i) * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      pixels[i][j] = 0.2989 * r + 0.5870 * g + 0.1140 * b;
    }
  }

  return pixels;
}