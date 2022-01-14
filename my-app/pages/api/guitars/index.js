// Todo - change to DB using an ORM
const guitars = [
    {id: 1, type: "taylor", name: "Taylor Academy Series", description: "Entry level guitar"},
    {id: 2, type: "margin", name: "Taylor Academy Series", description: "Entry level guitar"},
    {id: 3, type: "gibson", name: "Taylor Academy Series", description: "Entry level guitar"},
    {id: 4, type: "prs", name: "Taylor Academy Series", description: "Entry level guitar"},
    {id: 5, type: "taylor", name: "Taylor Academy Series", description: "Entry level guitar"},
    {id: 7, type: "taylor", name: "Taylor Academy Series", description: "Entry level guitar"},
    {id: 8, type: "taylor", name: "Taylor Academy Series", description: "Entry level guitar"},

]

//?type=gibson sample querystring
// http://localhost:3000/api/guitars?type=gibson
export default function handler(req, res) {
    
    switch(req.method){
        case 'GET':
            const {type} = req.query
            if(type !== undefined){
                res.status(200).json(guitars.filter(guitar=>guitar.type === type))
            } else{
                res.status(200).json(guitars)
            }            
            break;
        case 'POST':
            break;
        case 'PUT':
            break;
        case 'DELETE':
            break;
        default:
            throw Error("Unknown HTTP Method")
    }    
  }