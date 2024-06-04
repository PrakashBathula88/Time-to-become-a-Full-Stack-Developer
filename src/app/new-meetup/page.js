"use client";
import React from "react";
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";
export default function NewMeeting() {
  async function addMeetupHandler(enterdMeetupData) {
    const response = await fetch('/api/new-meetups',{
      method:'POST',
      body:JSON.stringify(enterdMeetupData),
      headers:{
        'Content-type': 'application/json '
      }
    });

    const data=await response.json();
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
