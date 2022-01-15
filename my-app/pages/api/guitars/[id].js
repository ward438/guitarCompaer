
// const {id} and `Post: ${id} have to use id because [id].js has id in the brackets.
//  Use same name ALWAYS`

export default function handler(req, res) {   

    switch(req.method){
      case 'GET':
        // todo - get object and return json instead of the id below

          const {id} =  req.query
          res.json({id: id, other: 'get whole object from orm instead of this garbage'})
          break;
      default:
          throw Error("Unknown HTTP Method")
  }    
  }