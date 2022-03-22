# Udacity React Developer 'nanodegree' - Module 2, Lesson 5, Exercise 2

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Summary

This is a small exercise set to practice the use of React.createElement.

Although it would be possible to do all of this in JSX, I'm still trying to cement the working 
and capabilities of React.createElement in my brain ... though occasionally struggling with 
getting the syntax perfect, even for moderate levels of nesting.

Splitting areas of the page out into separate components helps. However, it shows one advanatge 
of using JSX, in that using a closing tag to an HTML element makes it easier to see and follow
the nesting of element rather than the anonymouse closing brackets you use in plain vanilla 
React.

## Data Model

The provided data model looks very odd at first sight but after a little thought you see the 
resemblence to two SQL table with a join table ... maybe the course authors have something in
mind for later in the course.

In this form you can't use array.map to generate (HTML) lists so I'm experimtning with using a
data engineering ETL style approach to, first, prep the data in a form that can easily be 
'consumed' by the page generating code. Perhaps that's taking a bit from the NoSQL world too ...