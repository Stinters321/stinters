import React from 'react';
import FadeUp from '../../../components/FadeUp';

const ServiceCard = ({ card, index, openModal }) => {
    return (
        <FadeUp delay={0.2 + (index * 0.05)} className="h-full">
            {card.custom ? (
                <div onClick={() => openModal(card.modal)} className="h-full bg-white border-[1.5px] border-dashed border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-1.5 cursor-pointer transition-all min-h-[120px] hover:border-blue-400 hover:bg-blue-50/40">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-base">✏️</div>
                    <h4 className="sora font-bold text-slate-500 text-sm">{card.label}</h4>
                    <p className="dm text-slate-400 max-w-[130px]" style={{ fontSize: ".72rem" }}>{card.sub}</p>
                </div>
            ) : (
                <div className="h-full bg-white border-[1.5px] border-slate-200 rounded-xl p-4 transition-all hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="flex items-center gap-2 mb-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0 ${card.color}`}>{card.ico}</div>
                        <h4 className="sora font-bold text-slate-900 text-sm">{card.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {card.tags.map(tag => (
                            <button key={tag} onClick={() => openModal(tag)} className="dm font-semibold text-slate-500 bg-slate-50 border-[1.5px] border-slate-200 px-2.5 py-1 rounded-md cursor-pointer transition-all hover:bg-blue-500 hover:border-blue-500 hover:text-white" style={{ fontSize: ".67rem" }}>{tag}</button>
                        ))}
                    </div>
                </div>
            )}
        </FadeUp>
    );
};

export default ServiceCard;