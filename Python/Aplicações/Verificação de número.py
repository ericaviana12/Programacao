"""
 * Verificador de par ou ímpar
 * @author Erica Viana
"""

import os  # Importa a biblioteca os para acessar funcionalidades do sistema operacional

# Função para limpar a tela
def limpar_tela():  # Define a função que limpa a tela
    os.system('cls' if os.name == 'nt' else 'clear')  # Comando para limpar a tela (cls para Windows, clear para Unix)

# Limpar a tela antes de solicitar a entrada
limpar_tela()  # Limpa a tela

# Entrada - Solicitar um número ao usuário
num = int(input("Digite um número: "))  # Solicita ao usuário um número e converte para inteiro

# Processamento - Verificar se o número é par ou ímpar
if num % 2 == 0:  # Verifica se o número é divisível por 2 (par)
    print("O número é par.")  # Exibe mensagem se o número for par
else:  # Se não for par
    print("O número é ímpar.")  # Exibe mensagem se o número for ímpar
