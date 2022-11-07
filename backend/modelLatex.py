from bttr.lit_bttr import LitBTTR
from PIL import Image
from torchvision.transforms import ToTensor

def model_latex(img_path):
    ckpt = './model/model.ckpt'
    model = LitBTTR.load_from_checkpoint(ckpt)
    img = Image.open(img_path)
    img = ToTensor()(img)
    hyp = model.beam_search(img)
    return hyp