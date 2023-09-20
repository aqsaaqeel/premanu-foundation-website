import React from 'react';
import './Cards.css';
import { CardItem } from '../carditem/CardItem';

export const Cards = () => {
  return (
    <div className='cards'>
      <h1>What we do? </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/work/Education.jpg'
              text='Work with local schools to impart quality education'
              label='Education'
              path='/education'
            />
            <CardItem
              src='images/work/HealthNutrition.jpg'
              text='No child is born to die'
              label='Health and nutrition'
              path='/health-and-nutrition'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/work/ChildProtection.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Child protection'
              path='/child-protection'
            />
            <CardItem
              src='images/work/Livelihood.png'
              text='Health and nutrition is very important'
              label='Livelihood'
              path='/livelihood'
            />
            <CardItem
              src='images/work/Humanitarian.jpeg'
              text='Humanitarian Response during Disasters'
              label='Humanitarian'
              path='/humanitarian'
            />
            <CardItem
              src='images/work/EarlyChildhood.jpeg'
              text='Early Childhood builds foundation'
              label='Early Childhood'
              path='/early-childhood'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
