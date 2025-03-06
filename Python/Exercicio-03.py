##Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

num = int(input("Digite um número de 1 até 10: "))
cont = 1

if num >1 and num <10:
    print(f"---------- A tabuada de {num} é: ----------")
    for i in range(1,10):
        cont+=1
        print(f" {num} x {cont} = {num*cont}")

print("-"*40)