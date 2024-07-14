INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

 INSERT INTO role (title, salary, department_id)
 VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);

 INSERT INTO employee (first_name, last_name, role_id, manager_id)
 VALUES
('Sarah','Lee', 15, 1), 
('Claire','Thompson', 16, 15), 
('Bob','Thomas', 17, 15), 
('Jill','Smallwood', 18, 1 ), 
('Jane','Harris', 19, 18),  
('Victoria','White', 20, 21), 
('Sierra','Martin', 21, 1); 