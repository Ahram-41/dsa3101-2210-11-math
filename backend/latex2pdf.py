import os
import platform
import subprocess

latex_directory = "/Users/wbik/dsa3101-2210-11-math/dataset/Pics_to_latex"
# TeX source filename
tex_filename = '/Users/wbik/dsa3101-2210-11-math/dataset/Pics_to_latex/ST2131_Tut7_T05_Q1_P1_S0002.tex'
filename, ext = os.path.splitext(tex_filename)
# the corresponding PDF filename
pdf_filename = filename + '.pdf'


# def createpdf(output):
def createpdf(output):
    # args = ['pdflatex', output, '-interaction=nonstopmode']
    # process = subprocess.call(args,
    #                 stdout = subprocess,
    #                 stderr = subprocess,
    #                 stdin  = subprocess)

    # compile TeX file
    subprocess.run(['pdflatex', '-interaction=nonstopmode', tex_filename])

    # check if PDF is successfully generated
    if not os.path.exists(pdf_filename):
        raise RuntimeError('PDF output not found')
        
def openPDF(pdf_filename)
    # open PDF with platform-specific command
    if platform.system().lower() == 'linux':
        subprocess.run(['xdg-open', pdf_filename])
    else:
        raise RuntimeError('Unknown operating system "{}"'.format(platform.system()))