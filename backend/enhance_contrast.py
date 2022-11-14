import numpy as np
import matplotlib.pyplot as plt
import cv2

def compute(img, min_percentile, max_percentile):
    max_percentile_pixel = np.percentile(img, max_percentile)
    min_percentile_pixel = np.percentile(img, min_percentile)

    return max_percentile_pixel, min_percentile_pixel

def get_lightness(src):
    # calculate lightness
    hsv_image = cv2.cvtColor(src, cv2.COLOR_BGR2HSV)
    lightness = hsv_image[:,:,2].mean()
    
    return  lightness

def aug(src):
    # back and white
    src = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
    src = cv2.cvtColor(src, cv2.COLOR_GRAY2RGB)
    # enhance lightness
    if get_lightness(src) > 130:
        # lightness enough, no enhancement
        print("Lightness enough")
    # calculate percentile，remove a few outliers from the pixel value, quantile can be set manually
    max_percentile_pixel, min_percentile_pixel = compute(src, 1, 99)
    
    # Discard values outside the interval of quantiles
    src[src >= max_percentile_pixel] = max_percentile_pixel
    src[src <= min_percentile_pixel] = min_percentile_pixel
    
    # Stretch the quantile value range to 0 to 255, we take 255*0.1 and 255*0.9 here, as in it may exceed the pixel value. Thus better not to set it to 0 to 255.
    out = np.zeros(src.shape, src.dtype)
    cv2.normalize(src, out, 255*0.1, 255*0.9, cv2.NORM_MINMAX)
    
    return out

def normalise(img,path):
    new_img = aug(img)
    out_min=0
    out_max=255
    in_min = np.min(new_img) # The minimum pixel value of the original image
    in_max = np.max(new_img) # The maximum pixel value of the original image
    a = float(out_max-out_min)/(in_max-in_min)
    b = out_min-a*in_min
    img_norm = new_img*a+b   # Normalisation principle formula
    img_norm = img_norm.astype(np.uint8)
    plt.axis('off')
    plt.imshow(img_norm)
    plt.show()
    plt.savefig(path, bbox_inches='tight', dpi = 300)
    print("OK")

# img = cv2.imread(r"/Users/yixuangao/dsa3101-2210/test.png")
# new_img = normalise(img,"img.jpg")

# %matplotlib widget
