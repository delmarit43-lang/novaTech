const API_URL = 'http://localhost:5000/api/v1';

async function runTests() {
  console.log("🔄 Tijaabinaynaa Bcrypt iyo JWT Tokens...\n");

  // Tallaabada 1: Login
  console.log("1️⃣ Isku dayga Login (Fetching Token)...");
  const loginRes = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'admin@novatech.com',
      password: 'password123'
    })
  });
  
  const loginData = await loginRes.json();
  if (loginData.success) {
    console.log("✅ Login Wuu Shaqeeyay! Bcrypt wuxuu xaqiijiyay password-ka.");
    const token = loginData.data.accessToken;
    console.log("🔑 Token-kii Nasoo Gaaray:", token.substring(0, 30) + "...\n");

    // Tallaabada 2: Geli Dashboard-ka adigoo isticmaalaya Token-ka
    console.log("2️⃣ Tijaabinaynaa API-ga Dashboard-ka (Protected Route)...");
    const dashboardRes = await fetch(`${API_URL}/dashboard/stats`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const dashboardData = await dashboardRes.json();
    if (dashboardData.success) {
      console.log("✅ Dashboard-ka Xogtiisa Waan Helnay! (Token-ka wuu ansaxay)");
      console.log("📊 Xogta Dashboard-ka (Stats):", dashboardData.data);
    } else {
      console.error("❌ Cilad baa ka dhacday Dashboard-ka:", dashboardData.message);
    }

  } else {
    console.error("❌ Login-ka wuu fashilmay:", loginData.message);
  }
}

runTests();
