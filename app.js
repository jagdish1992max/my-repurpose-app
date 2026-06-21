// Dynamic Mobile Dashboard Logic
const root = document.getElementById('root');

let inputText = '';
let activeTab = 'twitter';
let generatedData = null;

function getDynamicContent(topic) {
    const cleanTopic = topic || "Your Content";
    return {
        twitter: `🧵 1/3: Let's talk about "${cleanTopic}"! This is a fascinating topic that most people completely misunderstand.\n\n2/3: The key to mastering "${cleanTopic}" is consistency and understanding your core hook. Don't overcomplicate it.\n\n3/3: What's your biggest challenge with "${cleanTopic}"? Let me know below! 👇`,
        reels: `🎬 [HOOK]: 'Stop scrolling if you care about ${cleanTopic}!'\n\n[VISUAL]: Fast neon-lit transitions, engaging text overlays.\n\n[BODY]: Here is the absolute best breakdown of ${cleanTopic} you'll see today. Save this for your next project.\n\n[CTA]: Share this with someone who needs to see this! 🔥`,
        linkedin: `🚀 I've been diving deep into ${cleanTopic} recently, and the insights are incredible.\n\nHere are 3 things everyone gets wrong about it:\n1. Thinking it requires too much time.\n2. Not focusing on the target audience.\n3. Giving up too early.\n\nSuccess with ${cleanTopic} is all about strategy, not just effort. What are your thoughts? #Strategy #Growth`
    };
}

function render() {
    const currentOutput = generatedData ? generatedData[activeTab] : "Click the button above to generate micro-content from your text!";

    root.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#0b0416]">
        <!-- Navbar -->
        <header class="border-b border-purple-900/40 bg-[#0f071e]/80 backdrop-blur-md px-4 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white">⚡</div>
                <span class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Repurpose.AI</span>
            </div>
            <span class="text-xs bg-purple-900/50 text-purple-300 border border-purple-700/50 px-2 py-1 rounded-full">Mobile v1.1</span>
        </header>

        <!-- Main Content -->
        <main class="flex-1 max-w-4xl w-full mx-auto px-4 py-6 flex flex-col gap-6">
            <!-- Input -->
            <div class="bg-[#120a24] border border-purple-950 rounded-2xl p-4 shadow-xl">
                <h2 class="text-sm font-semibold text-purple-300 mb-2">📥 Paste Your Script / Transcript</h2>
                <textarea id="myInput" class="w-full h-40 bg-[#080311] border border-purple-900/60 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-purple-500 resize-none font-mono" placeholder="Paste your video script here...">${inputText}</textarea>
                <button id="genBtn" class="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 rounded-xl shadow-lg active:scale-95 transition-all text-sm">Generate Micro-Content ✨</button>
            </div>

            <!-- Output -->
            <div class="bg-[#120a24] border border-purple-950 rounded-2xl p-4 shadow-xl flex flex-col">
                <!-- Tabs -->
                <div class="flex bg-[#080311] p-1 rounded-xl border border-purple-950 mb-4 text-xs">
                    <button id="tab-twitter" class="flex-1 py-2 text-center rounded-lg font-medium ${activeTab === 'twitter' ? 'bg-purple-900 text-purple-300' : 'text-gray-400'}">🐦 Thread</button>
                    <button id="tab-reels" class="flex-1 py-2 text-center rounded-lg font-medium ${activeTab === 'reels' ? 'bg-purple-900 text-purple-300' : 'text-gray-400'}">🎬 Short Script</button>
                    <button id="tab-linkedin" class="flex-1 py-2 text-center rounded-lg font-medium ${activeTab === 'linkedin' ? 'bg-purple-900 text-purple-300' : 'text-gray-400'}">💼 LinkedIn</button>
                </div>
                <!-- Text Area -->
                <div class="bg-[#080311] border border-purple-900/40 rounded-xl p-4 min-h-[150px]">
                    <p class="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed font-sans">${currentOutput}</p>
                </div>
                <button id="copyBtn" class="w-full mt-4 bg-purple-950/45 border border-purple-800 text-purple-300 py-2.5 rounded-xl text-sm font-medium">📋 Copy Content</button>
            </div>
        </main>
    </div>
    `;

    // Re-bind Events
    document.getElementById('myInput').addEventListener('input', (e) => { inputText = e.target.value; });
    
    document.getElementById('genBtn').addEventListener('click', () => {
        if(!inputText.trim()) return alert("Pehle kuch text paste karein!");
        
        document.getElementById('genBtn').innerText = "Processing AI Magic... ✨";
        document.getElementById('genBtn').disabled = true;

        setTimeout(() => {
            generatedData = getDynamicContent(inputText);
            document.getElementById('genBtn').disabled = false;
            render();
            alert("Boom! AI ne aapke topic ko repurpose kar diya.");
        }, 1000);
    });

    document.getElementById('copyBtn').addEventListener('click', () => {
        if(!generatedData) return alert("Pehle content generate kijiye!");
        navigator.clipboard.writeText(generatedData[activeTab]);
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
