# The model we tried for Math Handwriting Recognition

reference
Zhao, W., Gao, L., Yan, Z., Peng, S., Du, L., Zhang, Z. (2021). Handwritten Mathematical Expression Recognition with Bidirectionally Trained Transformer. In: Lladós, J., Lopresti, D., Uchida, S. (eds) Document Analysis and Recognition – ICDAR 2021. ICDAR 2021. Lecture Notes in Computer Science(), vol 12822. Springer, Cham. https://doi.org/10.1007/978-3-030-86331-9_37

## if you want to create a new ubuntu 20 04 GPU instance and train model, below are instructions used to setup your ubuntu in terminal.

```
lspci | grep -i nvidia
wget https://us.download.nvidia.cn/tesla/515.65.01/NVIDIA-Linux-x86_64-515.65.01.run
sudo apt install gcc make cmake
nvidia-smi
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
#then upload model to ubuntu
bash  Miniconda3-latest-Linux-x86_64.sh
bash
#then create env by Conda create
conda activate
conda install
#then install requirements and run model
```
