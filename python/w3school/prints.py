""" Dictionary for the formatting """
human = {
    'hands': 2,
    'legs': 2,
    'brain_capacity': 25
}

print "These human has {hands} hands and {legs} legs with {brain_capacity} brain capacity".format(**human)

""" Array for the formatting """
newBreed = [2, 3]
print "There are {} hands and {} legs".format(*newBreed)

""" Padding Fill and Alignment """
print "{:d} {:03d} {:>20f}".format(1, 2, 1.1)

