

const SectionTitile = ({heading,subHeading}) => {
    return (
        <div className="mx-auto w-1/4 text-center ">
            <p className="text-[#D99904] pb-2">---{subHeading}---</p>
            <h3 className="text-2xl border-y-4 py-4  ">{heading}</h3>
        </div>
    );
};

export default SectionTitile;