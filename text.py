def calculator():
    print("\nWelcome to the Python Calculator!\n")
    print("Select an operation to perform:")
    print("1. Addition (+)")
    print("2. Subtraction (-)")
    print("3. Multiplication (*)")
    print("4. Division (/)")
    print("5. Exponentiation (^)")
    print("6. Exit")

    while True:
        # Get user input
        choice = input("\nEnter the number of the operation (1-6): ")

        if choice == '6':
            print("\nThank you for using the calculator. Goodbye!")
            break

        if choice in ('1', '2', '3', '4', '5'):
            try:
                num1 = float(input("Enter the first number: "))
                num2 = float(input("Enter the second number: "))
            except ValueError:
                print("Invalid input. Please enter numerical values.")
                continue

            # Perform the selected operation
            if choice == '1':
                print(f"The result of {num1} + {num2} is {num1 + num2}")
            elif choice == '2':
                print(f"The result of {num1} - {num2} is {num1 - num2}")
            elif choice == '3':
                print(f"The result of {num1} * {num2} is {num1 * num2}")
            elif choice == '4':
                if num2 != 0:
                    print(f"The result of {num1} / {num2} is {num1 / num2}")
                else:
                    print("Division by zero is not allowed.")
            elif choice == '5':
                print(f"The result of {num1} ^ {num2} is {num1 ** num2}")
        else:
            print("Invalid input. Please select a valid operation (1-6).")

if __name__ == "__main__":
    calculator()
