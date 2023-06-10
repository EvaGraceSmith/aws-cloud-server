# package.json Notes

# Author
Eva Grace Smith

## Deployed Web Pages:

[Elastic Beanstalk GUI installed](http://aws-gui-cloud-server-env.eba-pruayrzr.us-east-2.elasticbeanstalk.com/)

[Elastic Beanstalk CLI installed ](http://aws-cloud-server-dev.us-east-2.elasticbeanstalk.com/hello?name=eva)
{
  "homepage": "https://github.com/EvaGraceSmith/aws-cloud-server"
}
```
### Collaboration
Ryan Galloway
Mark Smith
## Node / Express Applications

### For Tests

Your scripts section should have the following, so that you can easily run tests locally and in your CI.

```json
  "scripts": {
    "start": "node index.js",
    "test": "jest --verbose --coverage",
    "test-watch": "jest --watchAll --verbose --coverage",
    "init:config": "sequelize init:config",
    "db:create": "sequelize db:create"
},
```



