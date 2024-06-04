"use client"
import React from "react";
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";
export default function NewMeeting() {
  function addMeetupHandler(enterdMeetupData) {
    console.log(enterdMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
