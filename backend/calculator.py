import sympy as sp
from latex2sympy2 import latex2sympy, latex2latex

'''
findEquation will find equations in .tex files that we need to automatically check
'''
def findEquation(latex):
    # this is a placeholder
    return latex

'''
if the target function is about collection operations, 
It's needed to translate the latex string from forms like:
r"\frac{\left(\begin{array}{l}1 \\ 1\end{array}\right)\left(\begin{array}{l}7 \\ 3\end{array}\right)}{\left(\begin{array}{l}8 \\ 4\end{array}\right)} "
to be like
r"\frac{\binom{1}{1} \times \binom{7}{3} }{\binom{8}{4}}"
'''

def is_combination(latex):
    # this is a placeholder
    return True

def transformLatex(latex):
    # this is a placeholder
    str = latex
    return str

'''
is_equivalent is to check if the equation holds or not 
by checking whether the left side is equivalent with right side
'''
def is_equivalent(a_latex, b_latex):
    # this is a placeholder
    return True

'''
this fuction is to calculate the result of latex
'''
def calculate(latex):
    is_combination = True   
    # if is combination then need to do transformation
    if is_combination:
        transformLatex(latex)
        # this is a placeholder
        return latex2sympy(latex)
    else:
    # if is limitation or integration then return the output
        # this is a placeholder
        return latex2latex(latex)

