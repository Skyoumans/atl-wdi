-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
    SELECT * FROM authors JOIN books ON authors.id = books.author_id WHERE author_id = 8;

-- Find all fields (book and author related) for all books written by Milan Kundera.
    SELECT * FROM authors JOIN books ON authors.id = books.author_id WHERE name LIKE 'Milan%' ;
-- Find all books written by an author from China or the UK.
    SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'China' OR authors.nationality = 'United Kingdom';
-- Find out how many books Albert Camus wrote.
  SELECT * FROM books
  JOIN authors ON books.author_id = authors.id
  WHERE name = 'Albert Camus';

-- Find out how many books were written by US authors.
SELECT * FROM books 
JOIN authors ON books.author_id = authors.id
WHERE nationality = 'United States of America'

-- Find all books written after 1930 by authors from Argentina.
SELECT * FROM authors
JOIN books ON authors.id = books.author_id
WHERE nationality = 'Argentina'
AND publication_date > 1930;

-- Find all books written before 1980 by authors not from the US.
SELECT * FROM books
JOIN authors ON books.author_id = authors.id
WHERE books.publication_date < 1980
AND authors.nationality != 'United States of America';

-- Find all authors whose names start with 'J'.
SELECT * FROM authors
WHERE name ILIKE 'J%';

-- Find all books whose titles contain 'the'.
SELECT * FROM books 
WHERE title 
ILIKE '%the %';

-- Find all authors who have written books with that start with the letter 'N'.
SELECT * FROM authors 
JOIN books ON authors.id = books.author_id
WHERE books.title ILIKE 'N%';
