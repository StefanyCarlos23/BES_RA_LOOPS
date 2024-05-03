##Dada a lista = [2, 4, 7, 2, 3, 3, 1, 0, 2, 6] imprima o número que se repete mais vezes.

lista = [2,4,7,2,3,3,1,0,2,6]
numRepet = 0
contRepet = 0

for num in lista:
    cont = lista.count(num)
    if cont > contRepet:
        numRepet = num
        contRepet = cont
print(numRepet)

