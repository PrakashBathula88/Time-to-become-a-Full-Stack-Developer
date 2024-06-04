import {MongoClient} from "mongodb"
 async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

     const client=await MongoClient.connect('mongodb+srv://maxilian:3RIvI5T6fWPNDI8q@cluster0.wvajgqx.mongodb.net/');

     const db=client.db();

     const meetupCollection=db.collection('meetups');

     const result=await meetupCollection.insertOne(data);
     console.log(result);
     client.close();

     res.status(201).json({message:'Meetup inserted'});
  }
}

export default handler;
