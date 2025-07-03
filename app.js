// Mostrar y ocultar modal
const emergencyBtn = document.getElementById('emergencyBtn');
const emergencyModal = document.getElementById('emergencyModal');
const closeModal = document.getElementById('closeModal');
const emergencyForm = document.getElementById('emergencyForm');
const formSuccess = document.getElementById('formSuccess');

emergencyBtn.onclick = () => {
  emergencyModal.style.display = 'flex';
  formSuccess.textContent = '';
  emergencyForm.reset();
};
closeModal.onclick = () => {
  emergencyModal.style.display = 'none';
};
window.onclick = (e) => {
  if (e.target === emergencyModal) emergencyModal.style.display = 'none';
};

// WhatsApp directo
const whatsappBtn = document.getElementById('whatsappBtn');
whatsappBtn.onclick = () => {
  window.open('https://wa.me/56973100388', '_blank');
};

// Enviar formulario a WhatsApp
emergencyForm.onsubmit = function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const comuna = document.getElementById('comuna').value.trim();
  const region = document.getElementById('region').value.trim();
  const msg = `*Solicitud de Emergencia Funeraria*%0A%0A*Nombre:* ${encodeURIComponent(nombre)}%0A*WhatsApp:* ${encodeURIComponent(whatsapp)}%0A*Comuna:* ${encodeURIComponent(comuna)}%0A*Región:* ${encodeURIComponent(region)}`;
  // Cambia el número aquí si lo necesitas
  const waUrl = `https://wa.me/56973100388?text=${msg}`;
  window.open(waUrl, '_blank');
  formSuccess.textContent = '¡Solicitud enviada por WhatsApp! Un asesor te contactará pronto.';
  setTimeout(() => { emergencyModal.style.display = 'none'; }, 2000);
};

// Si prefieres enviar por correo, descomenta y ajusta esto:
// const mailto = `mailto:francovargascontacto@gmail.com?subject=Emergencia Funeraria&body=${msg}`;
// window.open(mailto, '_blank'); 