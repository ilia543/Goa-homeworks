# def dna_to_rna(dna):
#     rna = ""
#     for i in dna:
#         if i == "G":
#             rna = rna + i

#         elif i == "C":
#             rna = rna +i

#         elif i == "A":
#             rna = rna +i

#         else:
#             rna = rna + "U"
#     return rna


# def dna_to_rna(dna):
#     rna = ""
#     for i in dna:
#         if i != "T":
#             rna += i
#         else:
#             rna += "U"
#     return rna

# split-ს ვიყენებთ str-ებზე
# split-ს რასაც გადავცემთ, მაგ მნიშვნელობით მოხდება სთრინგის დაყოფა
# split - გაყოფა, გახლეჩვა
# full_name = "David Tezelashvili"
# print(full_name.split())

# def find_short(s):
#     list1 = s.split(" ")


#     word_len = len(list1[0])
#     for i in list1:
#         if len(i) < word_len:
#             word_len = len(i)
    
#     # word_len = 3
#     return word_len

# print(find_short("bitcoin take over the world maybe who knows perhaps"))
# 1. word_len - 7
# 2. word_len - 4
# 3. word_len - 4
# 4. word_len - 3