'use client'
import MeetupList from "../../components/meetups/MeetupList";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
const Dummy_Meetings = [
  {
    id: "1",
    title: "A first MeetUp",
    image:
      "https://miro.medium.com/v2/resize:fit:800/1*cIrXKfM2lqGzVWLCr7ftnw.jpeg",
    address: "CP, Delhi. Connaught Place is a major business ",
    description: "This is a first Meet up",
  },
  {
    id: "2",
    title: "A second MeetUp",
    image:
      "https://www.hindustantimes.com/ht-img/img/2023/06/13/1600x900/NDMC-is-taking-up-foundation-development-work-at-s_1686680829127.jpg",
    address: "Work begins to build fountains in Delhi",
    description: "This is a second Meet up",
  },
  {
    id: "3",
    title: "A third MeetUp",
    image:
      "https://www.hindustantimes.com/ht-img/img/2023/04/12/1600x900/Officials-said-the-revamp-of-Connaught-Place-will-_1681323427470.jpg",
    address: "After 2010, Connaught Place in for another major",
    description: "This is a third Meet up",
  },
];

function HomePage() {
  const [loadState,setLoadState]=useState([]);

  useEffect(()=>{
    setLoadState(Dummy_Meetings);
  },[])
  return (
    <Layout>
      <MeetupList meetups={loadState} />
    </Layout>
  );
}

export default HomePage;
