import './house.css';
import React, { useState, Suspense, lazy } from 'react';
import emailIcon from './Email.png';
import { useNavigate } from 'react-router-dom';
// import Inquiry from './Inquiry';
const InquiryLazy = React.lazy(() => import('./Inquiry'));

const House = ({ house }) => {
    const navigate = useNavigate();
    const [inquiryShown, setInquiryShown ] = useState(false);
    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    };

    const jumpToSpeakers = () => {
        navigate('/speakers');
    }

    return (
        <div>
            <div className='row mt-2'>
                <h5 className='col-md-12'>{house.country}</h5>
            </div>
            <div className='row'>
                <h3 className='col-md-12'>{house.address}</h3>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <img src={`/images/${house.photo}.jpeg`} alt='House' />
                </div>
                <div className='col-md-5'>
                    <p className='price'>${house.price}</p>
                    <p>{house.description}</p>
                    <img 
                        src={emailIcon}
                        height="50"
                        alt="inquiry"
                        onClick={inquiryClick}
                    />
                    {inquiryShown && 
                    <Suspense fallback={<div>Lazy Loading ...</div>}>
                        <InquiryLazy house={house} />
                    </Suspense>
                    }
                </div>
            </div>
            <button onClick={() => {jumpToSpeakers()}}>Jump to Speakers Module</button>
        </div>
    );
};

export default House;