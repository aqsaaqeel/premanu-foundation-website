import "../../App.css";
import {CardItem} from "../../components/carditem/CardItem";
export const Projects = () => {
  return (
    <>
      {" "}
      <div className='cards'>
      <h1>Our Projects </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Play2Learn - Toybank'
              label='Play2Learn'
              path='/play2learn'
            />
            <CardItem
              src='images/img-2.jpg'
              text='SCHOOL & COMMUNITY LEADERSHIP DEVELOPMENT PROJECT'
              label='School & community'
              path='/school-and-community'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};
