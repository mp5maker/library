from config.db import pyCursor

""" Add Column """
# ALTER TABLE table_name ADD column_name datatype
addColumn = 'ALTER TABLE customers ADD slug VARCHAR(255)'
addFirstColumn = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST'

""" Drop Column """
# ALTER TABLE table_name DROP COLUMN column_name
dropColumn = 'ALTER TABLE customers DROP test VARCHAR(255)'

""" Modify Column """
# ALTER TABLE table_name MODIFY COLUMN column_name datatype
modifyColumn = 'ALTER TABLE customers MODIFY COLUMN name VARCHAR(50)'

pyCursor.execute(addFirstColumn)
