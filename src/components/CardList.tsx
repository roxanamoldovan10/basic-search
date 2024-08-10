import React from 'react';
import Card from './Card';
import { User } from './models.js';

interface Props {
  robots: User[];
}

const CardList = ({ robots }: Props) => {
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
