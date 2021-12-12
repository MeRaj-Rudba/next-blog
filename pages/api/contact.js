import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://lumiereAdmin:dariusme1@cluster0.wqai5.mongodb.net/my-blog-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500), json({ message: "Could not connect to Database." });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = res.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failled" });
      return;
    }
    client.close();
    console.log(newMessage);
    res
      .status(201)
      .json({ message: "Success!!!", submittedMessage: newMessage });
  }
}
