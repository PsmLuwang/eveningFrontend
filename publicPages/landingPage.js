const futureAIContainer = document.getElementById("futureAIContainer");
for (let i = 0; i < 4; i++) {
  futureAIContainer.innerHTML += `
    <div class="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-md">
      <img 
        class="w-full aspect-5/3 object-cover"
        src="https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg?semt=ais_hybrid&w=740&q=80" 
        alt=""
      >
      <div class="p-5">
        <h1 class="font-bold">Project AI</h1>
        <p class="text-sm text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque optio quas ad rem labore debitis voluptatum veritatis quibusdam ducimus!</p>
      </div>
    </div>
  `;
  
}


// response == arrXCard
const arrXCard = ["Tech Orbit", "DiginetX", "Technologia", "NexusEvent", "Uralink", "SalaiJX", "IT hub", "NeuroX", "Quantara", "Project AI"];
const arrXimg=[
  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/2252000531/photo/beautiful-christmas-tree-and-other-decor-in-cozy-room-festive-interior-design.jpg?s=612x612&w=0&k=20&c=TZJsa4ME1ys_FvJrQeoAojBKQGFXcsTsaa6SVbcMDZ8=",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1685354218016-3899c9ef79ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9vZGllfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681433602478-dc69b2b49153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMGNsb3RoaW5nfGVufDB8fDB8fHww",                            
]

const scrollXCardContainer = document.getElementById("scrollXCardContainer");
for (let i = 0; i < arrXCard.length; i++) {
  scrollXCardContainer.innerHTML += `
    <div class="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-md min-w-80">
      <img 
        class="w-full aspect-5/3 object-cover"
        src=${arrXimg[i]}
        alt=""
      >
      <div class="p-5">
        <h1 class="font-bold">${arrXCard[i]}</h1>
        <p class="text-sm text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque optio quas ad rem labore debitis voluptatum veritatis quibusdam ducimus!</p>
      </div>
    </div>
  `;
}
