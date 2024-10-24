"""
 * Contador de caracteres
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

# Processamento - Conta o número de caracteres no texto
quantidade_caracteres = len(texto)  # Conta o número de caracteres no texto

# Saída - Exibe a quantidade de caracteres
print("O texto contém", quantidade_caracteres, "caracteres.")  # Exibe o total de caracteres contados
