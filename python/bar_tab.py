class Tab:

    menu = {
        'beef': 10,
        'chicken': 5,
        'fish': 15,
        'vegetables': 2
    }

    def __init__(self):
        self.total = 0
        self.items = []
    
    def addItems(self, item):
        self.items.append(item)
        self.total += self.menu[item]
    
    def printPrice(self, service, tax):
        tax = (tax/100) * self.total
        service = (service/100) * self.total
        total = self.total + tax + service

        for item in self.items:
            print(f'{item:20} {self.menu[item]}')

        print(f'{"Total":20} {total}') 