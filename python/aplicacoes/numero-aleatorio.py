"""
 * Gerador de número aleatório
 * @author Erica Viana
"""

# Importar a biblioteca necessária
import random  # Importa a biblioteca random para gerar números aleatórios
import os  # Importa a biblioteca os para acessar funcionalidades do sistema operacional

# Função para limpar a tela
def limpar_tela():  # Define a função que limpa a tela
    os.system('cls' if os.name == 'nt' else 'clear')  # Comando para limpar a tela (cls para Windows, clear para Unix)

# Limpar a tela antes de solicitar os valores
limpar_tela()  # Limpa a tela

# Entrada - Solicitar valores ao usuário
num_min = int(input("Digite o valor mínimo: "))  # Solicita ao usuário o valor mínimo e converte para inteiro
num_max = int(input("Digite o valor máximo: "))  # Solicita ao usuário o valor máximo e converte para inteiro

# Processamento - Gerar número aleatório
numero_aleatorio = random.randint(num_min, num_max)  # Gera um número aleatório entre num_min e num_max

# Saída - Exibir o número gerado
print("Número aleatório:", numero_aleatorio)  # Exibe o número aleatório gerado
