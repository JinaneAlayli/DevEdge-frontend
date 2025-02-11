import Header from "@/components/Header";
export default function ContactPage() {
  return (
    <>
      <Header />
    <div>
      <h2 >Contact Us</h2>
      <form >
        <input type="text" placeholder="Your Name"  required />
        <input type="email" placeholder="Your Email"  required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" >Send Message</button>
      </form>
    </div>
    </>
  );
}