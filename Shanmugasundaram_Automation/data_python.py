import pyodbc
import pytest


# Database Connection Function

def get_connection():
    DRIVER_NAME = "ODBC Driver 17 for SQL Server"
    SERVER_NAME = "192.168.1.10"
    DATABASE_NAME = "DEV_ACRTSAAS_DI"
    USER="temp"
    PASSWORD="vthink"

    connection_string = f'''
        DRIVER={{{DRIVER_NAME}}};
        SERVER={SERVER_NAME};
        DATABASE={DATABASE_NAME};
        UID={USER};
        PWD={PASSWORD};
        Trust_Connection=no;
    '''

    try:
        conn = pyodbc.connect(connection_string, timeout=5)
        print("Connection successful")
        return conn
    except Exception as e:
        pytest.fail(f" Connection failed: {e}")


# Query Runner

def run_sql_query_for_validation(sql_query_to_be_run):
    conn = get_connection()
    cursor = conn.cursor()
    print("=======================")
    print(f"Running Requested Query: {sql_query_to_be_run}")
    print("=======================")

    cursor.execute(sql_query_to_be_run)
    data = cursor.fetchall()

    conn.close()
    return data


# Parametrized Test

@pytest.mark.parametrize('table', [
     "ult.src_lst",
     "wd.cost_center",
     "wd.project",
     "adr.src_lst"
])
def test_availability_of_tables(table):
    rows = run_sql_query_for_validation(f"SELECT COUNT(*) FROM {table};")
    count = rows[0][0]  # first row, first column

# validation 
 assert count > 0, f" Test Failed! Table '{table}' is empty."
 print(f" Test Passed! Table '{table}' has {count} rows.")