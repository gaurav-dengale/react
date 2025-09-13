import React from 'react'

function Card(props) {
    console.log(props);
  return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <div className="w-64 flex flex-col rounded-xl bg-black min-h-[19rem] text-white shadow-lg overflow-hidden">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>

        <div className="flex flex-col p-4 flex-grow">
          {/* Title + Price */}
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-bold text-base leading-tight w-2/3 break-words">
              {props.username}
            </h1>
            <span className="text-gray-300 text-sm whitespace-nowrap ml-2">
              Price
            </span>
          </div>

          {/* ID + ETH price */}
          <div className="flex justify-between text-sm">
            <p className="text-gray-400">#345</p>
            <p className="text-green-400 font-semibold">0.01 ETH</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card