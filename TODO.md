[Express doc](http://expressjs.com/en/4x/api.html)

1. create a new express route POST @ `/bowling/score`
2. expect a JSON parameter `score` structured as
   `score: ([number, number] | [number, number, number])[]`
3. returns the score in a JSON

````{
  score: number
}```
````

4. Implementation of the score middleware should be the same as the score.ts function that we previously created

5. Create a POSTMAN request that we can use to test the route you created
