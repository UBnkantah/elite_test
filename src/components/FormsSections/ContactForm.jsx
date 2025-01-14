import { useState } from "react";
import { db } from "../../server_side/userAuth";
import { addDoc, collection } from "firebase/firestore";
import '../../App.css'
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const conData = await addDoc(collection(db, 'contact'), {name, email, subject, message})
      console.log(conData)
      setEmail('')
      setMessage('')
      setName('')
      setSubject('')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-dark text-light">
      <h2 className="text-success font-bold text-center">Get In Touch</h2>
      <div className="container">
        <form
        onSubmit={handleSubmit}
        className="main-contactFm-con mt-5 border border-success p-md-5 p-3 rounded mx-auto py-3"
      >
        <div className="row">
          <div className="d-flex flex-column col-md-6">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
              className="w-100 rounded p-2 mb-3"
            />
          </div>
          <div className="d-flex flex-column col-md-6">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Full Name"
              className="w-100 rounded p-2 mb-3"
            />
          </div>
        </div>

        <div className="d-flex flex-column w-100">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Full Name"
            className="w-100 rounded p-2 mb-3"
            
          />
        </div>
        <div className="d-flex flex-column w-100">
          <label className="font-weight-bold ">Message</label>
          <textarea
            required
            placeholder="Full Name"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-100 rounded p-2 my-3"
            style={{height: '250px'}}
          />
        </div>
        <button className="btn btn-success w-100">Send</button>
      </form>
      </div>
      
    </div>
  );
};

export default ContactForm;
