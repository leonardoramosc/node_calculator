# Calculator REST API
## This REST API, is designed to handle basic arithmatic calculations (sum, subtraction, multiplication, division)
### Endpoints:
- **/**: is the calculator path. Body example:
```
{
    "calculate": "2+2"
}
```
Response example:
```
{
    "result": 4
}
```
- **/history**: history of arithmatic operations.
Response example:
```
{
    "history": [
        {
            "_id": "62827f6024f228edf0e1a9f5",
            "operation": "SUBTRACTION",
            "firstOperand": 10,
            "secondOperand": 2,
            "result": 8,
            "__v": 0
        }
    ]
}
```