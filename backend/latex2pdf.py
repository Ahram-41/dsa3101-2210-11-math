import os
import platform
import subprocess



# def createpdf(output):
def createpdf(tex_filename):
    # args = ['pdflatex', output, '-interaction=nonstopmode']
    # process = subprocess.call(args,
    #                 stdout = subprocess,
    #                 stderr = subprocess,
    #                 stdin  = subprocess)
    # TeX source filename
    filename, ext = os.path.splitext(tex_filename)
    # the corresponding PDF filename
    pdf_filename = filename + '.pdf'
    # compile TeX file
    subprocess.run(['pdflatex', '-interaction=nonstopmode', tex_filename])

    # check if PDF is successfully generated
    if not os.path.exists(pdf_filename):
        raise RuntimeError('PDF output not found')
        
def openPDF(pdf_filename):
    # open PDF with platform-specific command
    if platform.system().lower() == 'linux':
        subprocess.run(['xdg-open', pdf_filename])
    else:
        raise RuntimeError('Unknown operating system "{}"'.format(platform.system()))