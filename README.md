jJsonViewer
===========

`jJsonViewer` is a jquery plugin which you can all on any jquery element. This function needs `stringified JSON` as input which will be converted into html and added into given element.

```javascript

	var jjson = '{ "name": "jJsonViewer","author": { "name": "Shridhar Deshmukh", "email": "shridhar.deshmukh3@gmail.com", "contact": [{"location": "office", "number": 123456}, {"location": "home", "number": 987654}] } }';

	$("#jjson").jJsonViewer(jjson);
			
```

This plugin includes JSON neautifier, you can expand and collapse JSON objects. 

Here is how it will look. 

![Output of jJsonViewer](https://github.com/Shridhad/jjsonviewer/blob/master/images/example.png "Output of jJsonViewer")
