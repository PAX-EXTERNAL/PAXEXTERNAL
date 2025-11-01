// ---------------- LOGIN ----------------
const FIXED_PASSWORD = "PAXEXTERNAL";

function login() {
    const senha = document.getElementById('senha').value.trim();
    if (senha === FIXED_PASSWORD) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        showAlert("Senha incorreta!");
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}

// ---------------- ALERTAS ----------------
function showAlert(msg) {
    document.getElementById("alertText").innerText = msg;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("customAlert").style.display = "none";
}

// ---------------- CONFIG ----------------
const APP_NAME = "PAXEXTERNAL FREE";
const AUTHOR = "Bernardo";
const EXPIRATION_DAYS = 3;
let MAIN_COLOR = "#00BFFF";
const EXP_KEY = "paxexternal_free_first_run";

// ---------------- EXPIRATION ----------------
function checkExpiration() {
    let firstRun = localStorage.getItem(EXP_KEY);
    if (!firstRun) {
        firstRun = Date.now();
        localStorage.setItem(EXP_KEY, firstRun);
    }
    const now = Date.now();
    const diffDays = (now - firstRun) / (1000 * 60 * 60 * 24);
    const remaining = Math.max(0, Math.ceil(EXPIRATION_DAYS - diffDays));

    const notice = document.getElementById("notice");
    if (notice) {
        notice.innerText = remaining > 0
            ? `⚠️ Versão FREE: ${remaining} dia(s) restante(s)`
            : "🚫 Expirado!";
    }

    if (remaining <= 0) {
        showAlert("O período de uso gratuito expirou. Atualize para a versão PRO.");
        return 0;
    }
    return remaining;
}

// ---------------- MENU ----------------
function showMenu(options) {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "menu-btn";
        btn.style.borderColor = MAIN_COLOR;
        btn.style.color = "#fff";
        btn.style.background = "#222";
        btn.innerText = opt.name;
        btn.addEventListener("click", opt.action);
        menu.appendChild(btn);
    });
}

// ---------------- SUBMENUS ----------------
function mainMenu() {
    if (checkExpiration() === 0) return;
    showMenu([
        { name: "🎯 Auxílio de Mira", action: aimMenu },
        { name: "🛡️ Estabilidade", action: stabilityMenu },
        { name: "💎 Visual & Efeitos", action: visualsMenu },
        { name: "⚙️ Sistema", action: systemMenu },
        { name: "🎨 Personalizar Cores", action: colorMenu },
        { name: "🚪 Logout", action: logout }
    ]);
}

function aimMenu() {
    showMenu([
        { name: "Ativar Mira Assistida", action: () => showAlert("Mira assistida ativada!") },
        { name: "Ajustar Recoil", action: () => showAlert("Recoil ajustado para controle melhor.") },
        { name: "Aimbot [PRO]", action: () => showAlert("Essa função está disponível somente na versão PRO.") },
        { name: "Head Lock [PRO]", action: () => showAlert("Essa função está disponível somente na versão PRO.") },
        { name: "Voltar", action: mainMenu }
    ]);
}

function stabilityMenu() {
    showMenu([
        { name: "Ativar AntiCrash", action: () => showAlert("AntiCrash ativado.") },
        { name: "Limpar Cache", action: () => showAlert("Cache limpo com sucesso.") },
        { name: "Otimizar Memória", action: () => showAlert("Memória otimizada.") },
        { name: "Voltar", action: mainMenu }
    ]);
}

function visualsMenu() {
    showMenu([
        { name: "Ativar ESP [PRO]", action: () => showAlert("ESP disponível somente na versão PRO.") },
        { name: "Modo Noturno", action: () => showAlert("Modo noturno aplicado.") },
        { name: "Cores Neon", action: () => showAlert("Cores neon habilitadas.") },
        { name: "Voltar", action
         
