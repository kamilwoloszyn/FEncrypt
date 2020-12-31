import fs = require('fs');

function ReadFromStream() : Error{
  const reader: fs.ReadStream = fs.createReadStream()
}

export default ReadFromStream