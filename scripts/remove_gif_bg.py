from pathlib import Path

import numpy as np
from PIL import Image
from scipy.ndimage import binary_propagation, generate_binary_structure

INPUT = Path(__file__).resolve().parents[1] / "public" / "robot_portfolio_animated.gif"
THRESHOLD = 248


def remove_edge_white(frame: Image.Image) -> Image.Image:
    arr = np.array(frame.convert("RGBA"), copy=True)
    rgb = arr[:, :, :3].astype(np.int16)
    is_bg = rgb.min(axis=2) >= THRESHOLD

    h, w = is_bg.shape
    seed = np.zeros((h, w), dtype=bool)
    seed[0, :] = is_bg[0, :]
    seed[-1, :] = is_bg[-1, :]
    seed[:, 0] = is_bg[:, 0]
    seed[:, -1] = is_bg[:, -1]

    transparent = binary_propagation(
        seed,
        mask=is_bg,
        structure=generate_binary_structure(2, 2),
    )
    arr[transparent, 3] = 0
    return Image.fromarray(arr)


def main() -> None:
    im = Image.open(INPUT)
    frames: list[Image.Image] = []
    durations: list[int] = []

    try:
        index = 0
        while True:
            frames.append(remove_edge_white(im.copy()))
            durations.append(im.info.get("duration", 80))
            index += 1
            im.seek(index)
    except EOFError:
        pass

    loop = im.info.get("loop", 0)
    frames[0].save(
        INPUT,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=loop,
        disposal=2,
        optimize=False,
    )
    print(f"Processed {len(frames)} frames -> {INPUT}")


if __name__ == "__main__":
    main()
