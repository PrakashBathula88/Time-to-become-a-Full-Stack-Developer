import { Fragment } from "react";

function MeetupDetails() {
  return (
    <Fragment>
      <img
        src="https://miro.medium.com/v2/resize:fit:800/1*cIrXKfM2lqGzVWLCr7ftnw.jpeg"
        alt="Loading..."
      />
      <h1>A First Meet </h1>
      <address>some street up</address>
      <p>The Meetup Description</p>
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback:true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}
export async function getStaticProps(content) {
  const meetupId = content.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://miro.medium.com/v2/resize:fit:800/1*cIrXKfM2lqGzVWLCr7ftnw.jpeg",
        id: meetupId,
        title: "First Meetup",
        address: "some street up",
        description: "The Meetup Description",
      },
    },
  };
}
export default MeetupDetails;
