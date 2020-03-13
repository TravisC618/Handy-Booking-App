import React, { Component } from "react";
import Modal from "react-animated-modal";
import logo from "../../img/logo.png";
import Divider from "@material-ui/core/Divider";
import "../../css/create-profile.css";
import ProfileStepper from "./ProfileStepper";

export default function CreateProfile(props) {
  const { showModal, handleShowModal } = props;

  return (
    <Modal
      visible={showModal}
      closemodal={() => handleShowModal()}
      type="zoomInDown"
    >
      <div className="profile-box">
        <div className="profile-title text-center">
          Welcome to <img src={logo} alt="logo" />
        </div>
        <Divider />
        <ProfileStepper />
      </div>
    </Modal>
  );
}
