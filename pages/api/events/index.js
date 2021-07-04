const {events} = require("./data.json")

export default function handler(req, res) {
  if(req.method === "GET"){
    res.status(200).json(events)
  } else {
    res.setHeader("Allow", ["GET"]);
    res.ststus(405).json({message: `Method ${req.method} is not allowed`})
  }
  
}
