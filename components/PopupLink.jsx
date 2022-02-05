import * as React from 'react';
import { useState } from 'react';
import Dangerous from './dangerous';

export default function PopupLink(props) {
    const [popup, setPopup] = useState(false);
    const { ctaLabel, overlayContent, overlayTitle } = props;
    const [showModal, setShowModal] = React.useState(false);

    return (
        <section className="flex justify-center items-center h-96 -mt-48  z-50 relative">
            {showModal === false &&
            <button
                className="bg-lime-600 shadow-lg  h-12 text-black -mt-96 active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg shadow-lime-500/20 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                
                onClick={() => setShowModal(true)}
            >
                {ctaLabel}
            </button>
            }
            {showModal ? (
                <>
                    <div
                        className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <div className="relative my-6 mx-auto w-3/6">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg shadow-blue-300/40 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">{overlayTitle}</h3>
                                
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>

                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto" dangerouslySetInnerHTML={{ __html: overlayContent }}>
                                    
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        x
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </section>
    );
}
