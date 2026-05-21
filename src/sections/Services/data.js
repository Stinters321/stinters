export const tabs = [
    ["mro", "🔧", "MRO"],
    ["elec", "⚡", "Electrical"],
    ["facility", "🏢", "Facility"],
    ["civil", "🏗️", "Civil & Structural"],
    ["spares", "🔩", "On-Demand Spares"]
];

export const SERVICE_PANELS = {
    mro: [
        { ico: "⚙️", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Mechanical Maintenance", tags: ["Motor Repair & Rewind", "Gearbox Maintenance", "Pump Repairs", "Conveyor Repair", "Fan & Blowers", "Vertical Turbine Pump"] },
        { ico: "🤖", color: "bg-gradient-to-br from-amber-50 to-amber-100", title: "Automation & Controls", tags: ["PLC Troubleshooting", "SCADA Support", "Calibration", "VFD Programming", "Electro Mechanical"] },
        { ico: "📋", color: "bg-gradient-to-br from-green-50 to-green-100", title: "Preventive Maintenance", tags: ["AMC Contract", "Scheduled PM", "Machine Inspection", "Predictive Maintenance"] },
        { ico: "🚨", color: "bg-gradient-to-br from-red-50 to-red-100", title: "Emergency Breakdown", tags: ["Emergency Repair", "On-Site Technician", "Line Down Support", "Machinery Repair"] },
        { ico: "🖨️", color: "bg-gradient-to-br from-purple-50 to-purple-100", title: "Specialist Equipment", tags: ["Printer Repairs", "AC Repairs", "Power Generation", "Field Service"] },
        { custom: true, label: "Custom Requirement", sub: "Describe anything - we find the right vendor", modal: "Custom MRO Requirement" },
    ],
    elec: [
        { ico: "⚡", color: "bg-gradient-to-br from-amber-50 to-amber-100", title: "Electrical Work & Repairs", tags: ["Single Phase Work", "Three Phase Work", "Electric Machine Service", "Electro Mechanical"] },
        { ico: "🔌", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Motors & Drives", tags: ["Motor Repair & Rewind", "Fan & Blower", "VFD Drives", "Power Generation"] },
        { ico: "🔋", color: "bg-gradient-to-br from-green-50 to-green-100", title: "Control & Panels", tags: ["Control Panel Repair", "Industrial Wiring", "Sensor Troubleshooting", "Transformer Service"] },
        { ico: "🏗️", color: "bg-gradient-to-br from-purple-50 to-purple-100", title: "Electrical Infrastructure", tags: ["DG Set Service", "Power Audit", "Earthing & Lightning", "Predictive Field Service"] },
    ],
    facility: [
        { ico: "🚿", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Plumbing & Water Systems", tags: ["Industrial RO Service", "Plumbing Repairs", "Water Supply Line", "Drainage & Sewage", "Leak Detection"] },
        { ico: "❄️", color: "bg-gradient-to-br from-green-50 to-green-100", title: "HVAC & Utilities", tags: ["AC Servicing", "Chiller Maintenance", "Cooling Tower", "Ventilation"] },
        { ico: "🔐", color: "bg-gradient-to-br from-red-50 to-red-100", title: "Safety & Compliance", tags: ["Fire Safety System", "Pest Control", "Safety Audit", "PPE Supply"] },
        { ico: "🏢", color: "bg-gradient-to-br from-teal-50 to-teal-100", title: "General Facility Upkeep", tags: ["Housekeeping", "Sanitation", "Waste Management"] },
        { custom: true, label: "Custom Facility Need", sub: "Describe your facility requirement", modal: "Custom Facility Requirement" },
    ],
    civil: [
        { ico: "🔥", color: "bg-gradient-to-br from-amber-50 to-amber-100", title: "Welding Work", tags: ["Arc Welding", "MIG Welding", "Gas Welding", "All Welding Repairs"] },
        { ico: "🏗️", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Small Civil Work", tags: ["Machinery Foundation", "Water Tank Work", "Office Repairs", "Aluminium Section"] },
        { ico: "🛡️", color: "bg-gradient-to-br from-green-50 to-green-100", title: "Metal Sheet Work", tags: ["Damage Sheet Change", "New Sheet Install", "Sheet Modification"] },
        { ico: "💧", color: "bg-gradient-to-br from-teal-50 to-teal-100", title: "Water Proofing", tags: ["Terrace Waterproofing", "Inner Side Proofing"] },
        { custom: true, label: "Custom Civil Work", sub: "Describe your civil or structural need", modal: "Custom Civil Requirement" },
    ],
    spares: [
        { ico: "🔩", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Machine Components", tags: ["Bearings", "Couplings", "Shafts", "Rollers", "Seals & Gaskets"] },
        { ico: "🏭", color: "bg-gradient-to-br from-amber-50 to-amber-100", title: "Custom Fabrication", tags: ["CNC Machining", "Laser Cutting", "Metal Fabrication", "Welding"] },
        { ico: "🌾", color: "bg-gradient-to-br from-green-50 to-green-100", title: "Biomass & Cattle Feed", tags: ["Biomass Spares", "Cattle Feed Spares", "Custom Parts"] },
        { ico: "🚗", color: "bg-gradient-to-br from-purple-50 to-purple-100", title: "Automotive Spares", tags: ["Precision Parts", "Tooling & Fixtures", "Custom Fabrication"] },
        { ico: "🔥", color: "bg-gradient-to-br from-red-50 to-red-100", title: "Industrial Boiler Spares", tags: ["Boiler Tubes", "Boiler Fittings", "Custom Boiler Parts"] },
        { ico: "🍳", color: "bg-gradient-to-br from-teal-50 to-teal-100", title: "Kitchenware Die & Industry", tags: ["Kitchenware Die", "Die & Mould", "Custom Parts"] },
        { ico: "🔌", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Electrical & Automation Parts", tags: ["PLC Components", "VFD Drives", "Sensors", "Cables"] },
        { custom: true, label: "Custom Spare / Prototype", sub: "Have a drawing? No MOQ. Submit here.", modal: "Custom Spare Requirement" },
    ],
};