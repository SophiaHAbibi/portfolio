import React from "react";
import header from "../images/Sophiaheader.jpg"
function HeaderImag() {
    return (
        <div className="fixed bg-[#f6f2ed]   transition-all duration-[.3s] top-0 left-0 w-full px-4 lg:px-[40px] z-[80]">
            <div className="w-full border-b border-[#E9E3DC]  py-[20px] flex justify-between items-center transition-all duration-[.3s]">
                <div className="flex-none gap-2 relative">
                    <a className="hover:text-[#F0353C] text-[#000000]" href="">SOPHIA HABIBI</a>
                </div>
                <div className="flex-auto text-center gap-[12px]">
                    <a href="#" className="px-[18px] text-[14px] popins hover:text-[#F0353C] py-[8px] text-[#000000] undefined">
                        ABOUT
                    </a>
                    <a href="#" className="px-[18px] text-[14px] popins hover:text-[#F0353C] py-[8px] text-[#000000]">
                        PROJECTS
                    </a>
                    <a href="#" className="px-[18px] text-[14px] popins hover:text-[#F0353C] py-[8px] text-[#000000]">
                        WORK WITH ME
                    </a>
                </div>
                <div className="flex-none gap-2 relative">
                <a className="hover:text-[#F0353C] text-[#000000]" href="">Get IN TOUCH</a>
                </div>
            </div>
        </div>
    );
}

export default HeaderImag;
