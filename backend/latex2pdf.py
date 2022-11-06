import os
import platform
import subprocess




def createPDF(tex_filename):

    # TeX source filename
    filename, ext = os.path.splitext(tex_filename)
    # the corresponding PDF filename
    pdf_filename = tex_filename[:-4] + '.pdf'
    # compile TeX file
    subprocess.run(['pdflatex', '-interaction=nonstopmode', tex_filename])

    # check if PDF is successfully generated
    # if not os.path.exists(pdf_filename):
    #     raise RuntimeError('PDF output not found')
        
def openPDF(pdf_filename):
    # open PDF with platform-specific command
    if platform.system().lower() == 'linux':
        subprocess.run(['xdg-open', pdf_filename])
    else:
        raise RuntimeError('Unknown operating system "{}"'.format(platform.system()))