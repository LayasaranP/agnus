import sqlite3

connection = sqlite3.connect("memory.db")
cursor = connection.cursor()


def create_table():
    cursor.execute(""" 
         CREATE TABLE IF NOT EXISTS memory(
             id INTEGER PRIMARY KEY, 
             topic, 
             objective, 
             nodes, 
             search_query, 
             sub_queries, 
             completed
         )
    """)
    connection.commit()


def insert_data(topic, objective, nodes, query, sub_queries, status):
    cursor.execute("""
        INSERT INTO memory (id, topic, objective, nodes, search_query, sub_queries, completed)
        VALUES (NULL, ?, ?, ?, ?, ?, ?)
    """, (topic, objective, nodes, query, sub_queries, status))

    connection.commit()
    print(f"Memory for '{topic}' inserted successfully.")


def get_all_data():
    cursor.execute("SELECT * FROM memory")
    return cursor.fetchall()


def update_data(topic, objective, nodes, query, sub_queries, status):
    cursor.execute(""" 
        UPDATE memory 
        SET objective = ?, 
            nodes = ?, 
            search_query = ?, 
            sub_queries = ?, 
            completed = ?
        WHERE topic = ?
    """, (objective, nodes, query, sub_queries, status, topic))

    connection.commit()

    if cursor.rowcount == 0:
        return f"No record found with topic: {topic}"
    else:
        return f"Successfully updated memory for: {topic}"


def delete_data(topic):
    cursor.execute("DELETE FROM memory WHERE topic = ?", (topic,))

    connection.commit()

    if cursor.rowcount == 0:
        return f"No record found with topic: {topic}"
    else:
        return f"Successfully deleted: {topic}"
