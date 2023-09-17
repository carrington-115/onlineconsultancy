import React from "react";
import styled from "styled-components";
import { IoMdCall } from "react-icons/io";

function Home() {
  return (
    <Container>
      <header>
        <img src="/images/logo.svg" alt="" />
        <h2>Best Online Repair Consultancy</h2>
      </header>
      <section className="services-available">
        <div className="content">
          <h3>Get appointments for the following products</h3>
          <ul>
            <li>Computers & Tablets</li>
            <li>Portable Audio</li>
            <li>Smart Home</li>
            <li>TV & Home Theater</li>
            <li>video Gaming</li>
            <li>Appliances</li>
            <li>Cameras && Camcorders</li>
            <li>Car Electronics</li>
            <li>Cell Phones</li>
          </ul>
          <h4>
            If you are having trouble with one of the above-mentioned things,
            seeking Geek Squad's help is one of the best things you can do to
            ease your hurdles. Here's how you can book an appointment on Geek
            Squad.
          </h4>
          <button>
            <IoMdCall /> Contact us
          </button>
        </div>
      </section>
      <section className="appointment">
        <h1>Booking an Appointment is easy +18772121066</h1>
        <div className="content">
          <p>
            Most of you might be thinking that scheduling Geek Squad
            Appointments is a daunting task, however, it is not. It is as easy
            as calling your friend who lives next door. There are several ways
            to reach out to them and these ways are listed below. They will
            offer you expert assistance that too at a very reasonable price. To
            book an appointment, use one of the following methods:
          </p>
          <ul>
            <li>Live Chat</li>
            <li>Toll free helpline</li>
            <li>24/7 Online Assistance</li>
          </ul>
          <p>
            By using one of the above-mentioned ways of scheduling Geek Squad
            Appointments, you can get your smart gadgets and appliances fixed
            within very less time. With these ways, you can schedule in-store
            appointments, in-store services booking, consultation services,
            in-home appointments, manage as well as change your appointments.
          </p>
        </div>
      </section>
      <footer>
        <p>&copy;Online Repair Store - 2023 (Appointement Assistance)</p>
      </footer>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  header {
    width: 100%;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 0.5cm 0;
    align-items: center;
    @media (min-width: 320px) and (max-width: 599px) {
      padding: 0.25cm 0;
    }

    img {
      width: 100px;
      height: 100px;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 70px;
        height: 70px;
      }
    }
    h2 {
      font-size: 36px;
      font-weight: normal;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 18px;
      }
    }
  }
  .services-available {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 80%;
      padding: 1cm;
      /* background-image: var(--box-gradient); */
      background-color: var(--primary-color);
      color: white;
      margin: 1cm 0;
      border-radius: 0.5cm;
      h3 {
        font-size: 36px;
        font-weight: 500;
      }
      h4 {
        color: white;
        margin-top: 0.5cm;
        font-size: 20px;
        font-weight: 100;
      }
      ul {
        margin-left: 1cm;
        li {
          font-size: 24px;
          font-weight: 100;
        }
      }
      button {
        padding: 10px 0.5cm;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        background-color: white;
        margin-top: 0.5cm;
        border: none;
        color: var(--primary-color);
        gap: 20px;
        border-radius: 30px;
        cursor: pointer;
        &:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
  .appointment {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      width: 100%;
      text-align: center;
      font-size: 36px;
      color: white;
      font-weight: 500;
      background-color: var(--primary-color);
      padding: 1cm 0;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 24px;
      }
    }
    .content {
      width: 80%;
      margin: 0.5cm 0;
      p {
        font-size: 24px;
        font-weight: 100;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 20px;
        }
      }
      ul {
        margin: 0.5cm 0;
        margin-left: 1cm;
        li {
          font-size: 24px;
          font-weight: normal;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 20px;
          }
        }
      }
    }
  }
  footer {
    width: 100%;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1cm 0;
    p {
      width: 80%;
      font-size: 20px;
      font-weight: normal;
      text-align: center;
    }
  }
`;
