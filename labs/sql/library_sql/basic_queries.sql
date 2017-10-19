-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
    SELECT * from authors;    
-- Get just the name and birth year of all authors
    SELECT name, birth_year, id FROM authors;  
-- Get all authors born in the 20th century or later
    SELECT * FROM authors WHERE birth_year >= 1900;
-- Get all authors born in the USA
    SELECT * FROM authors WHERE nationality = 'United States of America';
-- Get all books published in 1985
    SELECT * FROM books WHERE publication_date = 1985;
-- Get all books published before 1989
    SELECT * FROM books WHERE publication_date <= 1989;
-- Get just the title of all books.
    SELECT title FROM books;
-- Get just the year that 'A Dance with Dragons' was published
    SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';
-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
    SELECT * FROM books WHERE title LIKE '%the%';
-- Add yourself as an author
    INSERT INTO authors (name, nationality, birth_year) VALUES ('Skylar Youmans', 'United States of America', 1993);
-- Add two books that you'd like to write (you can hard-code your id as the author id)
    INSERT INTO books (id, title, publication_date, author_id) VALUES ('69', 'Book I want to write', 2018, 9);
    INSERT 0 1
    INSERT INTO books (id, title, publication_date, author_id) VALUES ('70', 'Book I want to write too', 2018, 9);
-- Update one of your books to have a new title
    UPDATE books SET title = 'Book I wont write' WHERE title = 'Book I want to write';
    UPDATE 1
-- Delete your books
    DELETE FROM books WHERE title = 'Book I want to write too';
    DELETE 1
-- Delete your author entry
    DELETE FROM authors WHERE id = 9;
