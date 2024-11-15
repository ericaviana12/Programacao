"""
 * Calculadora
 * @author Erica Viana
"""

import os  # Importa a biblioteca os para acessar funcionalidades do sistema operacional

# Função para limpar a tela
def limpar_tela():  # Define a função que limpa a tela
    os.system('cls' if os.name == 'nt' else 'clear')  # Comando para limpar a tela (cls para Windows, clear para Unix)

# Limpar a tela antes de solicitar a entrada
limpar_tela()  # Limpa a tela

# Entrada - Solicita ao usuário os números e a operação
num1 = float(input("Digite o primeiro número: "))  # Solicita o primeiro número e converte para float
num2 = float(input("Digite o segundo número: "))   # Solicita o segundo número e converte para float
operacao = input("Escolha a operação (+, -, *, /): ")  # Solicita ao usuário que escolha uma operação

# Processamento - Realiza as operações básicas
if operacao == '+':  # Verifica se a operação é soma
    resultado = num1 + num2  # Calcula a soma dos dois números
elif operacao == '-':  # Verifica se a operação é subtração
    resultado = num1 - num2  # Calcula a subtração dos dois números
elif operacao == '*':  # Verifica se a operação é multiplicação
    resultado = num1 * num2  # Calcula a multiplicação dos dois números
elif operacao == '/':  # Verifica se a operação é divisão
    if num2 != 0:  # Verifica se o divisor não é zero
        resultado = num1 / num2  # Calcula a divisão dos dois números
    else:
        resultado = 'Erro: divisão por zero'  # Exibe erro para divisão por zero
else:
    resultado = 'Operação inválida'  # Exibe erro para operação inválida

# Saída - Exibe os resultados
if isinstance(resultado, (int, float)):  # Verifica se o resultado é um número
    resultado = f"{resultado:.2f}"  # Formata o resultado para duas casas decimais

print("Resultado:", resultado)  # Exibe o resultado da operação
