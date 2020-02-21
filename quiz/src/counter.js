import React from "react";

export const Counter = (props) => <div className="card-footer row">
    <div className='col-6'>
        <span data-testid="current-level">{props.currentLevel}</span>   : مرحله
    </div>
    <div className='col-6'>
        ثانیه   <span data-testid="counter">{props.seconds}</span>   : زمان باقی مانده
    </div>
</div>;