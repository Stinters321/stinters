import React from 'react';
import FadeUp from '../../FadeUp';
import {handleSmoothScroll} from '../utils/utils'

const LinkColumn = ({ title, data, delay }) => {
    return (
        <FadeUp delay={delay} className="flex flex-col text-white/40">
            <p className="text-[10.4px] font-bold text-white/24" style={{ letterSpacing: '1.04px' }}>{title}</p>
            <div className="flex flex-col text-sm gap-2">
                {data.map((item, index) => (
                    <a className="transition-colors hover:text-white" onClick={(e)=>handleSmoothScroll(e,item.route)} key={index + item.name} href={item.route}>
                        {item.name}
                    </a>
                ))}
            </div>
        </FadeUp>
    );
};

export default LinkColumn;