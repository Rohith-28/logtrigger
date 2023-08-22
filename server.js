const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const cors = require('cors');
app.use(cors())
app.use(express.json())
app.get('/api/data', (req, res) => {
  fs.readFile('D://sample.json', 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading file:', error);
      return;
    }
    
    res.json(JSON.parse(data));
    console.log('File contents:', data);
  });

})

app.post('/api/data', (req, res) => {
    console.log("The Request body is",JSON.stringify(req.body))
    fs.writeFile('sample.json',JSON.stringify(req.body), 'utf8', (error) => {
        if (error) {
          console.error('Error writing to file:', error);
          return;
        }
        res.json(JSON.stringify(req.body))
        console.log('Data written to file successfully.');
      });
    
   
  })
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
