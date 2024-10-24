"""
 * Gerador de senhas
 * @author Erica Viana
"""

import random  # Importa o módulo random para gerar números aleatórios
import string  # Importa o módulo string para obter caracteres
import os  # Importa a biblioteca os para acessar funcionalidades do sistema operacional

# Função para gerar uma senha aleatória
def gerar_senha(tamanho):  # Define a função que gera a senha com o tamanho especificado
    caracteres = string.ascii_letters + string.digits + string.punctuation  # Define os caracteres permitidos na senha
    senha = ''.join(random.choice(caracteres) for _ in range(tamanho))  # Gera a senha escolhendo aleatoriamente caracteres
    return senha  # Retorna a senha gerada

# Função para limpar a tela
def limpar_tela():  # Define a função que limpa a tela
    os.system('cls' if os.name == 'nt' else 'clear')  # Comando para limpar a tela (cls para Windows, clear para Unix)

# Limpar a tela antes de solicitar a entrada
limpar_tela()  # Limpa a tela

# Entrada - Pergunta ao usuário se deseja gerar uma senha
opcao = input("Você deseja gerar uma senha? (S/N): ").strip().upper()  # Solicita confirmação para gerar uma senha

if opcao == 'S':  # Se o usuário optar por gerar uma senha
    tamanho_senha = int(input("Digite o tamanho da senha desejada: "))  # Solicita o tamanho da senha desejada
    print("Senha gerada:", gerar_senha(tamanho_senha))  # Exibe a senha gerada
else:  # Se o usuário não quiser gerar uma senha
    print("Operação cancelada.")  # Exibe mensagem de cancelamento
