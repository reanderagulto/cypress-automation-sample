const xml2js = require('xml2js');
const fs = require('fs')
const url = "https://gatsby.agentimage.com/sitemap/sitemap-0.xml";
const writePath = './cypress/fixtures/links.json'

let dataJSON = []

fetch(url)
    .then(response => response.text())
    .then(data => {
      let parseString = xml2js.parseString;
      parseString(data, function (err, result) {
        result.urlset.url.map((item, index) => {
            dataJSON.push({url: item.loc[0]})
        })
      });
      fs.writeFile(
        writePath, 
        JSON.stringify(dataJSON, null, 1), 
        (error) => {
            if (error) {
                console.log('An error has occurred ', error);
                return;
            }
            console.log('Data written successfully to disk');
        }
        )
        
});

