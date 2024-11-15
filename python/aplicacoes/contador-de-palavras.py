"""
 * Contador de palavras
 * @author Erica Viana
"""

import os  # Importa a biblioteca os para acessar funcionalidades do sistema operacional

# Função para limpar a tela
def limpar_tela():  # Define a função que limpa a tela
    os.system('cls' if os.name == 'nt' else 'clear')  # Comando para limpar a tela (cls para Windows, clear para Unix)

# Limpar a tela antes de solicitar a entrada
limpar_tela()  # Limpa a tela

# Entrada - Solicita ao usuário um texto
texto = input("Digite um texto: ")  # Solicita um texto do usuário

# Processamento - Divide o texto em palavras e conta
palavras = texto.split()  # Divide o texto em uma lista de palavras
quantidade_palavras = len(palavras)  # Conta a quantidade de palavras na lista

# Saída - Exibe a quantidade de palavras
print("O texto contém", quantidade_palavras, "palavras.")  # Exibe o total de palavras contadas
