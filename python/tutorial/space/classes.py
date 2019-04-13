class Planet:

    # Instance [Accessible]
    shape = 'round'
    gravity = ''

    def __init__(self, name, radius, gravity, system):
        # Attributes [Not Accessible]
        self.name = name
        self.radius = radius
        self.gravity = gravity
        self.system = system
    
    def orbit(self):
        return f'{self.name} is orbiting in the {self.system}'
    

    # Common for all planets [Have access to accessible instance]
    @classmethod
    def commons(self):
        return f'All planets are {self.shape} because of gravity'


    # Static method for all planets [Do no have the access of self or accessible instance]
    @staticmethod
    def spin(speed='2000 miles per hour'):
        return f'The planets spins and spins at {speed}'

hoth = Planet('Hoth', '200000', '5.5', 'Hoth System')
print(hoth.shape)
print(f'{hoth.name} {hoth.radius} {hoth.gravity} {hoth.system}')
print(hoth.orbit())
print(hoth.commons())

print('\n')

print(Planet.commons())
print(Planet.spin())
print(Planet.spin('at a very high speed'))
