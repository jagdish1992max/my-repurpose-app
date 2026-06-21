// Mobile Optimized Dashboard Logic
const root = document.getElementById('root');

let inputText = '';
let activeTab = 'twitter';

const outputData = {
    twitter: "🧵 1/3: Long form content is changing! Here is how you can pivot your strategy today...\n\n2/3: Focus on micro-content. Repurpose your videos into short, punchy hooks.\n\n3/3: Use automated workflows to save 10+ hours every week!",
    reels: "🎬 [HOOK]: 'If you are still creating content from scratch, you are losing!'\n\n[VISUAL]: Neon lit studio, fast cuts.\n\n[BODY]: Break down your 10-minute video into 3 killer bullet points.\n\n[CTA]: Save this reel for your next shoot!",
    linkedin: "🚀 Content creation isn't about working harder; it's about distribution.\n\nToday, I repurposed one long-form script into 3 Twitter Threads and 2 Reels.\n\nStop creating. Start distributing. #ContentStrategy"
};

function render() {
    root.innerHTML = `
    <div class="min-h-screen flex flex-col">
        <header class="border-b border-purple-900/40 bg-[#0f071e]/80 backdrop-blur-md px-4 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white">⚡</div>
                <span class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Repurpose.AI</span>
            </div>
            <span class="text-xs bg-purple-900/50 text-purple-300 border border-purple-700/50 px-2 py-1 rounded-full">Mobile v1.0</span>
        </header>

        <main class="flex-1 max-w-4xl w-full mx-auto px-4 py-6 flex flex-col gap-6">
            <div class="bg-[#120a24] border border-purple-950 rounded-2xl p-4 shadow-xl">
                <h2 class="text-sm font-semibold text-purple-300 mb-2">📥 Paste Your Script / Transcript</h2>
                <textarea id="myInput" class="w-full h-40 bg-[#080311] border border-purple-900/60 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-purple-500 resize-none" placeholder="Paste your video script here...">${inputText}</textarea>
                <button id="genBtn" class="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 rounded-xl shadow-lg active:scale-95 transition-all text-sm">Generate Micro-Content ✨</button>
            </div>

            <div class="bg-[#120a24] border border-purple-950 rounded-2xl p-4 shadow-xl flex flex-col">
                <div class="flex bg-[#080311] p-1 rounded-xl border border-purple-950 mb-4 text-xs">
                    <button id="tab-twitter" class="flex-1 py-2 text-center rounded-lg font-medium ${activeTab === 'twitter' ? 'bg-purple-900 text-purple-300' : 'text-gray-400'}">🐦 Thread</button>
                    <button id="tab-reels" class="flex-1 py-2 text-center rounded-lg font-medium ${activeTab === 'reels' ? 'bg-purple-900 text-purple-300' : 'text-gray-400'}">🎬 Short Script</button>
                    <button id="tab-linkedin" class="flex-1 py-2 text-center rounded-lg font-medium ${activeTab === 'linkedin' ? 'bg-purple-900 text-purple-300' : 'text-gray-400'}">💼 LinkedIn</button>
                </div>
                <div class="bg-[#080311] border border-purple-900/40 rounded-xl p-4 min-h-[150px]">
                    <p class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed">${outputData[activeTab]}</p>
                </div>
                <button id="copyBtn" class="w-full mt-4 bg-purple-950/45 border border-purple-800 text-purple-300 py-2.5 rounded-xl text-sm font-medium">📋 Copy Content</button>
            </div>
        </main>
    </div>
    `;

    // Event Listeners set karna
    document.getElementById('myInput').addEventListener('input', (e) => { inputText = e.target.value; });
    
    document.getElementById('genBtn').addEventListener('click', () => {
        if(!inputText) return alert("Pehle kuch text paste karein!");
        document.getElementById('genBtn').innerText = "Processing... ✨";
        setTimeout(() => {
            document.getElementById('genBtn').innerText = "Generate Micro-Content ✨";
            alert("AI ne aapka content repurpose kar diya hai!");
        }, 1200);
    });

    document.getElementById('copyBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(outputData[activeTab]);
        alert("Copied to clipboard! 🚀");
    });

    ['twitter', 'reels', 'linkedin'].forEach(tab => {
        document.getElementById(`tab-${tab}`).addEventListener('click', () => {
            activeTab = tab;
            render();
        });
    });
}

render();
                      
