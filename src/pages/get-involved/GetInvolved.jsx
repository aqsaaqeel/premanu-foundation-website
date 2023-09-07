import React from 'react';
import "./GetInvolved.css"
import '../../components/carditem/CardItem.css'
// import { CardItem } from '../carditem/CardItem';
import {CardItem} from "../../components/carditem/CardItem"
export const GetInvolved = () => {
  return (
    <div className='cards'>
      <h1>What we do? </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='By donating to the Premanu Foundation, you become a catalyst for change.'
              label='Donate'className="get-involved-label"
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='How to get fellowship at Premanu Foundation'
              label='Fellowship'
              path='/fellowship'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Make an impact by working with us'
              label='Volunteer & Internship'
              path='/volunteer'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Take a look at our partners who have been helping us throughout'
              label='Corporate Partnership'
              path='/partnership'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Get in touch if you want to know more about us or the work we do'
              label='Contact Us'
              path='/products'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}
