import React from 'react'

interface CardProps {
  heading: string;
  button: number;
}

export default function Card({heading , button }: CardProps) {
  return (
    <>
    <div className="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop" width={200} height={200}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-1">
        <h1 className="text-lg font-semibold">{heading}</h1>
        <p className="mt-0 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button
          type="button"
          className="mt-2 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {button}
        </button>
      </div>
    </div>
    </>
  )
}
