CREATE TABLE todos (
	todo_id BIGSERIAL PRIMARY KEY,
	todo_name VARCHAR(100) NOT NULL
);

INSERT INTO todos (todo_name) VALUES ('Just Have Fun');