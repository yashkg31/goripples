import React from 'react'

function AboutUs() {
  return (
    <div className='flex-col items-center space-y-4 bg-[#090909eb] p-10 rounded-2xl shadow-2xl shadow-black w-2/3 h-auto m-auto border-white border-4'>
        <div className='text-5xl text-[#c3193b]'
          style={{ fontFamily: "Quicksand", fontWeight: 800 }}>
            About Us
        </div>
        <div className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque volutpat ex iaculis varius. Quisque rutrum viverra dignissim. Curabitur consectetur nisl vel tempus pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Maecenas turpis libero, condimentum quis fermentum et, consequat vitae lorem. Fusce scelerisque elit sem, vitae ornare tortor suscipit lobortis. Cras non pretium odio, sit amet maximus felis. Cras venenatis lobortis arcu quis convallis. In eros augue, sagittis nec eros et, eleifend mattis purus. Suspendisse bibendum vitae libero sit amet fermentum. Proin in auctor elit. Ut pharetra fermentum nibh.
        </div>
    </div>
  )
}

export default AboutUs