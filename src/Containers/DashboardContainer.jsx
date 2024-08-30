import React from 'react'
import Card from '../Components/Card'
import { cardsData } from '../utils/cardData'

const DashboardContainer = () =>
{

    return (
        <div style={{ padding: '20px', }}>

            <div className='card-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                {
                    cardsData.map((card, key) =>
                    {
                        return <Card
                            key={key}
                            heading={card.heading}
                            content={card.content}
                        />
                    })
                }


            </div>
            {/* by using map method we are render cards */}



        </div>
    )
}

export default DashboardContainer
