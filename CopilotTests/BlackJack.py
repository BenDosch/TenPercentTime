"""Script to execute the blackjack game."""
from itertools import product
import random
import time

def main():
    """Main function to execute the blackjack game."""
    print("Welcome to the game of blackjack!")

    # Create the deck
    deck = create_deck()

    while True:
        # Start the game
        print("Starting the game...")
        start_game(deck)

        # Ask the player if they want to play again
        choice = input("Would you like to play again? [Y]es or [N]o: ").lower()
        if choice == 'y':
            continue
        elif choice == 'n':
            break
        else:
            print("Invalid input. Try again.")


def start_game(deck: list) -> None:
    """Start the game."""
    # Shuffle the deck
    shuffle_deck(deck)


    # Deal the cards
    print("Dealing the cards...")
    player_hand = []
    dealer_hand = []
    player_hand.append(deck.pop())
    dealer_hand.append(deck.pop())
    player_hand.append(deck.pop())
    dealer_hand.append(deck.pop())
    time.sleep(1)

    # Show Player's hand
    display_hand(player_hand, "Player")

    #Show Dealer's hand
    display_hand(dealer_hand, "Dealer", dealer_start=True)

    # Player's turn
    print("Player's turn...")
    while get_hand_value(player_hand) < 21:
        choice = input("Would you like to [H]it or [S]tand? ").lower()
        if choice == 'h':
            player_hand.append(deck.pop())
            player_score = get_hand_value(player_hand)
            hand_string = ''.join([f'{card} ' for card in player_hand])
            display_hand(player_hand, "Player")
        elif choice == 's':
            print(f'Player stands.')

            time.sleep(1)
            break
        else:
            print("Invalid input. Try again.")

        # Check if the player has busted
        if get_hand_value(player_hand) > 21:
            print("You busted!")
            break

    # Dealer's turn
    print("Dealer's turn...")
    display_hand(dealer_hand, "Dealer")
    if get_hand_value(player_hand) <= 21:
        while get_hand_value(dealer_hand) < 17:
            dealer_hand.append(deck.pop())
            print(f'Dealer draws a card. {dealer_hand[-1]}')
            display_hand(dealer_hand, "Dealer")
    if get_hand_value(dealer_hand) > 21:
        print("Dealer busted!")
    else:
        print("Dealer stands.")

    # Determine the winner
    determine_winner(player_hand, dealer_hand)


def create_deck() -> list:
    """Create a deck of cards."""
    ascii_suits = ["\u2665", "\u2666", "\u2660", "\u2663"]  # Hearts, Diamonds, Spades, Clubs
    card_values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    deck = [f'{x}{y}' for x, y in product(card_values, ascii_suits)]
    return deck


def shuffle_deck(deck: list) -> None:
    """Shuffle the deck."""
    random.shuffle(deck)
    time.sleep(1)


def get_hand_value(hand: list) -> int:
    """Get the value of a hand."""
    # Create a dictionary of card values
    card_values = {
        'A': 11, '2': 2, '3': 3, '4': 4,
        '5': 5, '6': 6, '7': 7, '8': 8,
        '9': 9, '10': 10, 'J': 10, 'Q': 10,
        'K': 10
    }
    # Get the value of the hand
    value = 0
    for card in hand:
        value += card_values[card[:-1]]
    # Check if the hand contains an ace
    if 'A' in hand:
        if value > 21:
            value -= 10
    return value


def display_hand(hand: list, who: str, dealer_start: bool = False) -> None:
    """Display the hand."""
    score = get_hand_value(hand)
    hand_string = ''.join([f'{card} ' for card in hand])
    unicode_card_back = (chr(int("1F0A0", 16)))
    print(
        f"{who}'s hand: {hand[0]} {unicode_card_back!s}"
    ) if dealer_start else print(
        f"{who}'s hand: {hand_string} Score: {score}"
    )
    time.sleep(1)

def determine_winner(player_hand: list, dealer_hand: list) -> None:
    """Determine the winner."""
    player_score = get_hand_value(player_hand)
    dealer_score = get_hand_value(dealer_hand)
    print(
        f'Player wins with a score of {player_score} vs Dealer score of {dealer_score}!'
    ) if player_score > dealer_score else print(
        f'Dealer wins with a score of {dealer_score} vs Player score of {player_score}!'
    )
    time.sleep(1)

if __name__ == '__main__':
    main()
