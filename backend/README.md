# Backend functions
- *convert_latex.py* was build by Mathpix API. 

    Please be careful when you are using its function, since it is *paid* and its pricing is

    - $0.02/request (0-1K requests)
    - $0.004/request (1K-100K requests)
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