def cough_dec(func):

    def func_wrapper():
        print("Cough Cough ::")
        func()
        print("!!")
    
    return func_wrapper

@cough_dec
def question():
    print('Will you give me a discount on that?')

question()
