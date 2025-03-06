cont=1
idades = 10
soma = 0
while cont<=idades:
    idade = int(input("Digite a uma idade: "))
    soma += idade
    cont +=1
media = soma/idades
print(f"A média de idades é: {media}.")