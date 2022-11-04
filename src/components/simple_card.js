import React from 'react';

const SampleCard = (props) => {
return(
       <div class={props.cardColClass}>
            <div className={props.cardBorder} style={props.cardStyle}>
                {props.image}
              <div class="card-body">
                <h5 class="card-title">{props.cardTitle}</h5>
                <p style={{display:'block',textAlign:'center', fontWeight:20, fontSize:14}}>
                 {props.cardText}
                </p>
                {props.children}
              </div>
            </div>
          </div>
    )
}

export default SampleCard;