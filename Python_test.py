# dummy.py - intentionally insecure code for GitHub code scanning tests

import sqlite3
import os

# Hardcoded secret (for testing)
API_KEY = "12345-ABCDE-SECRET-KEY"

def get_user_from_db(user_id):
    # SQL Injection vulnerability
    conn = sqlite3.connect("test.db")
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE id = {user_id};"  # vulnerable
    cursor.execute(query)
    return cursor.fetchall()

def run_command(cmd):
    # Command injection vulnerability
    os.system("echo Running command: " + cmd)

def unsafe_math(expression):
    # eval vulnerability
    return eval(expression)  # Dangerous!

if __name__ == "__main__":
    user_input = input("Enter user id: ")
    results = get_user_from_db(user_input)
    print(results)

    cmd = input("Enter a shell command: ")
    run_command(cmd)

    expr = input("Enter a math expression: ")
    print(unsafe_math(expr))
