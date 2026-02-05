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
const arrXImg = [
  "https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg?semt=ais_hybrid&w=740&q=80",
]

const scrollXCardContainer = document.getElementById("scrollXCardContainer");
for (let i = 0; i < arrXCard.length; i++) {
  scrollXCardContainer.innerHTML += `
    <div class="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-md min-w-80">
      <img 
        class="w-full aspect-5/3 object-cover"
        src="https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg?semt=ais_hybrid&w=740&q=80" 
        alt=""
      >
      <div class="p-5">
        <h1 class="font-bold">${arrXCard[i]}</h1>
        <p class="text-sm text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque optio quas ad rem labore debitis voluptatum veritatis quibusdam ducimus!</p>
      </div>
    </div>
  `;
}
