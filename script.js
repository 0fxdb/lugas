
// Cronômetro de contagem regressiva
function updateCountdown() {
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  
  let h = parseInt(hours.textContent);
  let m = parseInt(minutes.textContent);
  let s = parseInt(seconds.textContent);
  
  // Decrementar segundos
  s--;
  
  if (s < 0) {
    s = 59;
    m--;
    
    if (m < 0) {
      m = 59;
      h--;
      
      if (h < 0) {
        // Reiniciar quando chegar a zero
        h = 23;
        m = 59;
        s = 59;
      }
    }
  }
  
  // Atualizar display
  hours.textContent = h.toString().padStart(2, '0');
  minutes.textContent = m.toString().padStart(2, '0');
  seconds.textContent = s.toString().padStart(2, '0');
}

// Iniciar cronômetro
setInterval(updateCountdown, 1000);

// Função para rolar até seção
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Modal de checkout
const modal = document.getElementById('checkout-modal');
const checkoutProduct = document.getElementById('checkout-product');

function openCheckout(product) {
  const products = {
    'riqueza': {
      name: 'Grimório Supremo da Riqueza',
      price: 'R$ 27,90',
      oldPrice: 'R$ 49,90'
    },
    'amor': {
      name: 'Feitiços de Amor Proibidos',
      price: 'R$ 22,90',
      oldPrice: 'R$ 39,90'
    },
    'protecao': {
      name: 'Escudo Espiritual Supremo',
      price: 'R$ 19,90',
      oldPrice: 'R$ 34,90'
    }
  };
  
  const selectedProduct = products[product];
  
  checkoutProduct.innerHTML = `
    <div style="background: rgba(74, 20, 140, 0.3); padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid var(--golden);">
      <h3 style="color: var(--golden); margin-bottom: 10px;">${selectedProduct.name}</h3>
      <p style="color: var(--gray); text-decoration: line-through; margin: 0;">${selectedProduct.oldPrice}</p>
      <p style="color: var(--golden); font-size: 1.5rem; font-weight: bold; margin: 0;">${selectedProduct.price}</p>
    </div>
  `;
  
  modal.style.display = 'block';
  
  // Efeito de entrada
  setTimeout(() => {
    modal.querySelector('.modal-content').style.transform = 'scale(1)';
    modal.querySelector('.modal-content').style.opacity = '1';
  }, 10);
}

function closeCheckout() {
  modal.style.display = 'none';
}

// Fechar modal clicando fora
window.onclick = function(event) {
  if (event.target === modal) {
    closeCheckout();
  }
}

// Formulário de checkout
document.querySelector('.checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simular processamento
  const button = this.querySelector('.checkout-button');
  const originalText = button.textContent;
  
  button.textContent = '🔮 Processando...';
  button.disabled = true;
  
  setTimeout(() => {
    alert('✨ Compra realizada com sucesso! Você receberá o grimório em seu e-mail em alguns minutos.');
    closeCheckout();
    button.textContent = originalText;
    button.disabled = false;
    this.reset();
  }, 2000);
});

// Navegação suave para links do header
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// Animação de entrada para elementos quando aparecem na tela
function animateOnScroll() {
  const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .product-card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Inicializar elementos com opacity 0
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .product-card');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
  });
});

// Listener para scroll
window.addEventListener('scroll', animateOnScroll);

// Parallax suave para símbolos flutuantes
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const symbols = document.querySelectorAll('.symbol');
  
  symbols.forEach((symbol, index) => {
    const speed = 0.5 + (index * 0.1);
    symbol.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
  });
});

// Efeito de digitação para o título hero (opcional)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Ativar efeitos especiais ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar classe para animações CSS
  document.body.classList.add('loaded');
  
  // Efeito de brilho nos botões
  const buttons = document.querySelectorAll('.cta-button, .buy-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 50px rgba(255, 215, 0, 0.8)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.5)';
    });
  });
});
