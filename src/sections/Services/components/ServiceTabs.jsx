import React from 'react';
import FadeUp from '../../../components/FadeUp';

const ServiceTabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <FadeUp delay={0.2} className="flex gap-1.5 flex-wrap mb-5">
            {tabs.map(([key, ico, label]) => (
                <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className="flex items-center gap-1.5 sora font-semibold px-3.5 py-2 rounded-xl cursor-pointer transition-all border-[1.5px]"
                    style={{
                        fontSize: ".8rem",
                        background: activeTab === key ? "#2B80ED" : "#fff",
                        borderColor: activeTab === key ? "#2B80ED" : "#E2E8F0",
                        color: activeTab === key ? "#fff" : "#64748B",
                        boxShadow: activeTab === key ? "0 4px 14px rgba(43,128,237,.35)" : "none"
                    }}
                >
                    <span>{ico}</span>{label}
                </button>
            ))}
        </FadeUp>
    );
};

export default ServiceTabs;