INSERT INTO department (name)
VALUES  ('Dept A'),
        ('Dept B');

INSERT INTO role (title, salary, department_id)
VALUES  ('Role 1', 11111.11, 1),
        ('Role 2', 22222.22, 1),
        ('Role 3', 33333.33, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('First', 'Blurst', 3, NULL),
        ('Second', 'Blecond', 2, 1),
        ('Third', 'Blurd', 1, 2),
        ('Fourth', 'Employee', 1, 2);