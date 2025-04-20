import React from 'react';

function Faq() {
    return (
        <div className="space-y-4 mt-5 mb-10">
            <h1 className="font-bold text-3xl">FAQ's</h1>

            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
                    <h2 className="text-lg font-medium text-left">What is Chikankari?</h2>
                    <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <p className="px-4 pt-4 text-gray-900 text-left">
                    Chikankari is a traditional embroidery style from Lucknow, India, known for its intricate handwork on fine fabrics like cotton, muslin, and georgette. It adds elegance and grace to any clothing item.
                </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
                    <h2 className="text-lg font-medium text-left">Do you export Chikankari products internationally?</h2>
                    <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <p className="px-4 pt-4 text-gray-900 text-left">
                    Yes, we specialize in exporting authentic Chikankari garments worldwide. We ensure secure packaging and efficient logistics for international shipments.
                </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
                    <h2 className="text-lg font-medium text-left ">Can I customize Chikankari designs for bulk orders?</h2>
                    <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <p className="px-4 pt-4 text-gray-900 text-left">
                    Absolutely. We accept custom designs, color preferences, and embroidery patterns for bulk orders. Our team works closely with clients to ensure their vision is delivered perfectly.
                </p>
            </details>
        </div>
    );
}

export default Faq;