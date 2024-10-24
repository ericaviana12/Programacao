"""
 * Conversor de temperaturas
 * @author Erica Viana
"""

import os  # Importa a biblioteca os para acessar funcionalidades do sistema operacional

# Função para converter Celsius para Fahrenheit
def celsius_para_fahrenheit(temp_celsius):  # Define a função para conversão de Celsius para Fahrenheit
    return (temp_celsius * 9/5) + 32  # Retorna o resultado da conversão

# Função para converter Fahrenheit para Celsius
def fahrenheit_para_celsius(temp_fahrenheit):  # Define a função para conversão de Fahrenheit para Celsius
    return (temp_fahrenheit - 32) * 5/9  # Retorna o resultado da conversão

# Função para limpar a tela
def limpar_tela():  # Define a função que limpa a tela
    os.system('cls' if os.name == 'nt' else 'clear')  # Comando para limpar a tela (cls para Windows, clear para Unix)

# Limpar a tela antes de solicitar a entrada
limpar_tela()  # Limpa a tela

# Entrada - Pergunta ao usuário qual conversão deseja fazer
opcao = input("Você deseja converter de Celsius para Fahrenheit (C) ou de Fahrenheit para Celsius (F)? ").strip().upper()  # Solicita a opção de conversão

if opcao == 'C':  # Se a opção for C
    temp_celsius = float(input("Digite a temperatura em Celsius: "))  # Solicita a temperatura em Celsius
    resultado = celsius_para_fahrenheit(temp_celsius)  # Calcula a conversão
    print(f"{temp_celsius:.2f} graus Celsius equivalem a {resultado:.2f} graus Fahrenheit.")  # Exibe a conversão com 2 casas decimais
elif opcao == 'F':  # Se a opção for F
    temp_fahrenheit = float(input("Digite a temperatura em Fahrenheit: "))  # Solicita a temperatura em Fahrenheit
    resultado = fahrenheit_para_celsius(temp_fahrenheit)  # Calcula a conversão
    print(f"{temp_fahrenheit:.2f} graus Fahrenheit equivalem a {resultado:.2f} graus Celsius.")  # Exibe a conversão com 2 casas decimais
else:  # Se a opção não for reconhecida
    print("Opção inválida! Por favor, escolha 'C' ou 'F'.")  # Exibe mensagem de erro
