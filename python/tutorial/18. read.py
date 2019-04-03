########################## Simple Concept ###########################
ipsum_file = open('files/read.txt')

# Gap in between lines
for line in ipsum_file:
    print(line)

# Gap without gap between lines
for line in ipsum_file:
    print(line.rstrip())

# Readlines [Creates an array but first setting the cursor]
ipsum_file.seek(0)
lines = ipsum_file.readlines()
print(lines)

# Choose where to read from
ipsum_file.seek(50)
file_text = ipsum_file.read(100)
print(file_text)

# Close the file
ipsum_file.close()

######################### Using With [Do not need to open or close]#######
def sequence_filter(line):
    return '>' not in line

with open('files/dna.txt') as dna_file:
    lines = dna_file.readlines()
    print(list(filter(sequence_filter, lines)))
