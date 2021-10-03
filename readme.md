## Readme
Testing reusing of connections in MongoDb
- https://stackoverflow.com/a/46871946
Based on various examples at 
- https://stackoverflow.com/questions/10656574/how-do-i-manage-mongodb-connections-in-a-node-js-web-application

### Setup
1. Database users
2. Collection persons
3. add connectionstring to src/cfg.json
   ```json
   {"uri":"mongodb://..."}
   ``` 

### Test
```powershell
Invoke-RestMethod yourhost.com/persons -Method Post -UseBasicParsing -Body '{"uid":12}' -ContentType application/json

Invoke-RestMethod yourhost.com/persons -Method Post -UseBasicParsing -Body '{"uid":12}' -ContentType application/json


```
