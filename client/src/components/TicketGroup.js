import React from 'react';

const TicketGroup = ({ type, handleQuantity, tickets }) => {
  return (
    <div className='row ticket_group'>
      <div className='col-4'>
        <span style={{ textTransform: 'capitalize' }}>{type}</span>
      </div>
      <div className='col-4'>{tickets[type]?.price} kr</div>
      <div className='col-4 ticket_quantity'>
        <div
          className='ticket_minus'
          onClick={() => handleQuantity(type, 'minus')}
        >
          <span>-</span>
        </div>
        <span>{tickets[type]?.quantity}</span>
        <div className='ticket_plus' onClick={() => handleQuantity(type)}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default TicketGroup;
