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
              src='images/img-9.jpg'
              text='Work with local schools to impart quality education'
              label='Education'
              path='/education'
            />
            <CardItem
              src='images/img-2.jpg'
              text='No child is born to die'
              label='Health and nutrition'
              path='/health-and-nutrition'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Child protection'
              path='/child-protection'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Health and nutrition is very important'
              label='Livelihood'
              path='/livelihood'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Humanitarian Response during Disasters'
              label='Humanitarian'
              path='/humanitarian'
            />
                        <CardItem
              src='images/img-8.jpg'
              text='Humanitarian Response during Disasters'
              label='Early Childhood'
              path='/early-childhood'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
