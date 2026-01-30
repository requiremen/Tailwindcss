export const Revenuecard = function({
   title,
   orderCount,
   amount
}
    
){
    return <div className="bg-white rounded shadow-lg p-10 transition-colors duration-500 ease-in-out hover:bg-blue-200">
        <div className="text-gray-700">
            {title}
            ?

        </div>
        <div className="flex justify-between">
            <div>
                {amount}
            </div>
           {orderCount ? <div>
            <div className="text-blue-700 flex cursor-pointer text-bold">
            {orderCount} orders <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
         </svg>
         </div>

           </div> : null}
        </div>
    </div>
    
}
