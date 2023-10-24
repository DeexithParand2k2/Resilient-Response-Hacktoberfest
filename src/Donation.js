import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaDonate, FaGift, FaExclamationCircle } from 'react-icons/fa';
import styled from 'styled-components';
import Navbar from './components/Nav/Navbar';
import Footer from './Footer';
import image from './assets/logo2.jpg';
import donationImg from './assets/donation_img.jpg'

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top : 2rem;
  margin-bottom : 6rem;
`;

const ContentContainer = styled(Container)`
  padding: 2rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const DonationButton = styled(Button)`
  background-color: #3c64b1;
  border: none;
  &:hover {
    background-color: #2c4681;
  }
`;

const GiftBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
`;

const GiftBoxItem = styled.div`
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const GiftBoxImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;


const Title = styled.h1`
  color: #212529;
  font-size: 2rem;
  margin: 20px 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 20px 0;
`;

const DonationImageContainer = styled.img`
  width: 600px;
  height: 400px;
  align-self: center;
  object-fit: cover;
  margin-bottom: 1rem;
`;

// Two main donation components

const InkindDonation = ({donationType,setDonationType}) => (
  <>
    <MainContainer>
        <h1 style={{ color: '#1a2a6c' }}>Disaster Gift Box Donation</h1>
        <ContentContainer>
          <h3>Choose a Gift Box to Donate</h3>
          <p>Each gift box contains essential items that will help disaster survivors get through the toughest times.</p>
          <GiftBoxContainer>
            <GiftBoxItem>
              <GiftBoxImage src={image} alt="Gift Box 1" />
              <h4>Food and Water Box</h4>
              <p>This box contains non-perishable food items and bottled water.</p>
              <DonationButton>Donate Now</DonationButton>
            </GiftBoxItem>
            <GiftBoxItem>
              <GiftBoxImage src={image} alt="Gift Box 2" />
              <h4>Clothing Box</h4>
              <p>This box contains new or gently used clothing items and blankets.</p>
              <DonationButton>Donate Now</DonationButton>
            </GiftBoxItem>
          </GiftBoxContainer>
          <FormContainer>
            <h3>Donate Without Money</h3>
            <InputField type="text" placeholder="Your Name" />
            <InputField type="email" placeholder="Your Email" />
            <InputField type="text" placeholder="Your Address" />
          </FormContainer>
        </ContentContainer>
        <MonetaryDonationButton donationType={donationType} setDonationType={setDonationType} />
    </MainContainer>
  </>
)

const MonetaryDonation = ({donationType,setDonationType}) => (
  <>
    <MainContainer>
        <h1 style={{ color: '#1a2a6c' }}>Disaster Monetary Donation</h1>
        <Title>How Your Donation Helps</Title>
        <Description>
          A resilient response is the key to thriving. By embracing change, learning from challenges, and innovating in the midst of uncertainty.
          Resilient Response is a disaster management system that focuses on building resilient communities that are prepared to withstand and recover from natural disasters. Your generous donations play a crucial role in our mission. They help us in building resilient communities, providing disaster preparedness, and ensuring an effective response to natural disasters. With your support, we can minimize damage and save lives.
        </Description>
        <DonationImageContainer src={donationImg} alt="donation_img" />

        <InkindDonationButton donationType={donationType} setDonationType={setDonationType} />
    </MainContainer>
  </>
)

// Donation choice buttons

const MonetaryDonationButton = ({donationType,setDonationType}) => (
  <div>
    <div>
      <FaExclamationCircle />
      <p>Your monetary support, if possible, would be greatly appreciated to help our cause</p>
    </div>

    <Button style={{margin:'5px',padding:'5px'}} variant="secondary" type="submit" onClick={()=>{setDonationType(!donationType)}}>
      <FaDonate style={{marginBottom:'5px'}} /> Monetary Donation
    </Button>
  </div>
)

const InkindDonationButton = ({donationType,setDonationType}) => (
  <div>
    <div>
      <FaExclamationCircle />
      <p>If you don't have money to donate, you can still help by volunteering or spreading awareness about the disaster</p>
    </div>

    <Button style={{margin:'5px',padding:'5px'}} variant="secondary" type="submit" onClick={()=>{setDonationType(!donationType)}}>
      <FaGift style={{marginBottom:'5px'}} /> In-Kind Donations
    </Button>
  </div>
)

const DisasterGiftBoxPage = () => {

  const [donationType,setDonationType] = useState(false) // false represents "donate with money"

  return (
    <div className="App">
      <Navbar />  

        {
          donationType===true ? (
            <InkindDonation donationType={donationType} setDonationType={setDonationType}/>
          ) : (
            <MonetaryDonation donationType={donationType} setDonationType={setDonationType}/>
          )
        }
        
      <Footer />
    </div>
  );
};

export default DisasterGiftBoxPage;
