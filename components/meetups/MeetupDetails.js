
// import styles from "../meetups/MeetupDetails.css";
export default function MeetupDetails(props) {
  return (
    <section >
      <img src={props.image} alt="Loading" />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
