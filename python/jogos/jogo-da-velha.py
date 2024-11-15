"""
 * Jogo da velha
 * @author Erica Viana
"""

# Inicializa o tabuleiro como uma lista de espaços em branco
tabuleiro = [" " for _ in range(9)]  # Cria uma lista com 9 espaços em branco representando o tabuleiro

# Função para imprimir o tabuleiro
def imprimir_tabuleiro():  # Define a função que imprime o tabuleiro
    print("|" + tabuleiro[0] + "|" + tabuleiro[1] + "|" + tabuleiro[2] + "|")  # Imprime a primeira linha do tabuleiro
    print("|" + tabuleiro[3] + "|" + tabuleiro[4] + "|" + tabuleiro[5] + "|")  # Imprime a segunda linha do tabuleiro
    print("|" + tabuleiro[6] + "|" + tabuleiro[7] + "|" + tabuleiro[8] + "|")  # Imprime a terceira linha do tabuleiro

# Função para verificar se há um vencedor
def verificar_vencedor():  # Define a função para verificar se há um vencedor
    # Combinações de vitória
    combinacoes = [
        (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Horizontais
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Verticais
        (0, 4, 8), (2, 4, 6)              # Diagonais
    ]
    
    for a, b, c in combinacoes:  # Percorre cada combinação de vitória
        if tabuleiro[a] == tabuleiro[b] == tabuleiro[c] != " ":  # Verifica se há um vencedor
            return tabuleiro[a]  # Retorna o símbolo do vencedor (X ou O)
    
    return None  # Retorna None se não houver vencedor

# Função principal para executar o jogo
def jogar():  # Define a função que controla o fluxo do jogo
    jogador_atual = "X"  # Define o primeiro jogador como X
    for _ in range(9):  # O jogo pode ter no máximo 9 jogadas
        imprimir_tabuleiro()  # Exibe o tabuleiro atual
        movimento = int(input(f"Jogador {jogador_atual}, escolha uma posição (1-9): ")) - 1  # Solicita a posição ao jogador e ajusta para 0-8
        
        if 0 <= movimento < 9 and tabuleiro[movimento] == " ":  # Verifica se a posição está dentro do intervalo e vazia
            tabuleiro[movimento] = jogador_atual  # Atualiza a posição no tabuleiro
            vencedor = verificar_vencedor()  # Verifica se há um vencedor
            
            if vencedor:  # Se houver um vencedor
                imprimir_tabuleiro()  # Exibe o tabuleiro final
                print(f"Jogador {vencedor} ganhou!")  # Exibe a mensagem de vitória
                return  # Encerra o jogo
            jogador_atual = "O" if jogador_atual == "X" else "X"  # Alterna entre os jogadores
        else:  # Se a posição não for válida
            print("Posição inválida ou já ocupada, escolha outra.")  # Exibe mensagem de erro

    imprimir_tabuleiro()  # Exibe o tabuleiro final
    print("Empate!")  # Exibe mensagem de empate

# Inicia o jogo
jogar()  # Chama a função para iniciar o jogo
