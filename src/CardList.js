import React from 'react';
import Card from './Card';

const CardList = ({robotObject}) => {
	return(
			<div>
				{
					robotObject.map((user) => {
						return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
					})
				}
			</div>
		);
};

export default CardList;