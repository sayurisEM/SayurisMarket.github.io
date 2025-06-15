const products = {
    edredones: {
        title: 'Edredones',
        icon: '🛏️',
        models: [
            { name: 'Edredón Clásico Individual', price: 40, description: 'Suave y cómodo para una persona', image: 'images/casacaazulniña.jpg' },
            { name: 'Edredón Clásico Matrimonial', price: 45, description: 'Perfecto para parejas', image: 'images/edredon_clasico_matrimonial.jpg' },
            { name: 'Edredón Premium Individual', price: 50, description: 'Calidad superior, muy abrigador', image: 'images/edredon_premium_individual.jpg' },
            { name: 'Edredón Premium Matrimonial', price: 55, description: 'Lujo y comodidad para dos', image: 'images/edredon_premium_matrimonial.jpg' },
            { name: 'Edredón Deluxe King Size', price: 60, description: 'El más amplio y lujoso', image: 'images/edredon_deluxe_king_size.jpg' }
        ]
    },
    casacasMujer: {
        title: 'Casacas Mujer',
        icon: '🧥',
        models: [
            { name: 'Casaca Básica Mujer', price: 30, description: 'Simple y funcional para el día a día', image: 'images/casaca_basica_mujer.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Azul'] },
            { name: 'Casaca Deportiva Mujer', price: 40, description: 'Ideal para ejercicio y actividades', image: 'images/casaca_deportiva_mujer.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Azul'] },
            { name: 'Casaca Casual Mujer', price: 50, description: 'Perfecta para el día a día', image: 'images/casaca_casual_mujer.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Azul'] },
            { name: 'Casaca Fashion Mujer', price: 60, description: 'Moderna y con estilo', image: 'images/casaca_fashion_mujer.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Azul'] },
            { name: 'Casaca Premium Mujer', price: 70, description: 'Materiales de alta calidad', image: 'images/casaca_premium_mujer.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Azul'] },
            { name: 'Casaca de Lujo Mujer', price: 80, description: 'La mejor calidad y diseño', image: 'images/casaca_lujo_mujer.jpg', sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Azul'] }
        ]
    },
    casacasHombre: {
        title: 'Casacas Hombre',
        icon: '👦',
        models: [
            { name: 'Casaca Urbana Hombre', price: 85, description: 'Estilo urbano para hombres modernos', image: 'images/casaca_urbana_hombre.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
            { name: 'Casaca Invierno Hombre', price: 90, description: 'Abrigo resistente para climas fríos', image: 'images/casaca_invierno_hombre.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
            { name: 'Casaca Deportiva Hombre', price: 95, description: 'Ideal para actividades físicas', image: 'images/casaca_deportiva_hombre.jpg', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
            { name: 'Casaca Premium Hombre', price: 100, description: 'Calidad superior y diseño elegante', image: '	', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
        ]
    },
    gorros: {
        title: 'Gorros',
        icon: '🧢',
        models: [
            { name: 'Gorro Básico', price: 10, description: 'Sencillo y económico', image: 'images/gorro_basico.jpg' },
            { name: 'Gorro de Lana', price: 15, description: 'Abrigador para el frío', image: 'images/gorro_lana.jpg' },
            { name: 'Gorro Deportivo', price: 18, description: 'Para actividades físicas', image: 'images/gorro_deportivo.jpg' },
            { name: 'Gorro Fashion', price: 22, description: 'Moderno y con estilo', image: 'images/gorro_fashion.jpg' },
            { name: 'Gorro Premium', price: 25, description: 'Calidad superior', image: 'images/gorro_premium.jpg' },
            { name: 'Gorro de Diseñador', price: 29, description: 'Exclusivo y elegante', image: 'images/gorro_disenador.jpg' }
        ]
    }
};

let currentProduct = '';
let selectedModels = [];

function showModels(productType) {
    currentProduct = productType;
    const product = products[productType];
    const modal = document.getElementById('modelsModal');
    const modalTitle = document.getElementById('modalTitle');
    const modelsContainer = document.getElementById('modelsContainer');
    modalTitle.textContent = `${product.icon} ${product.title} - Selecciona tus modelos`;
    modelsContainer.innerHTML = '';

    product.models.forEach((model, index) => {
        const modelDiv = document.createElement('div');
        modelDiv.className = 'model-item';
        modelDiv.innerHTML = `
            <img class="model-image" src="${model.image}" alt="${model.name}" onerror="this.src='images/logo.png';">
            <div class="model-info">
                <div class="model-details">
                    <span class="model-name">${model.name}</span>
                    <span class="model-price">S/ ${model.price}</span>
                </div>
                <div style="color: #666; font-size: 0.9rem;">${model.description}</div> 
                <!-- Opción de color -->
                ${model.colors ? `
                <div class="color-options">
                    <strong>Color:</strong>
                    <select class="color-select" data-model-index="${index}">
                        <option value="">Selecciona un color</option>
                        ${model.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                    </select>
                </div>
                ` : ''}
                <!-- Opción de talla -->
                ${model.sizes ? `
                <div class="size-options">
                    <strong>Talla:</strong>
                    <select class="size-select" data-model-index="${index}">
                        <option value="">Selecciona una talla</option>
                        ${model.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                    </select>
                </div>
                ` : ''}
                <!-- Botón Añadir al Carrito -->
                <button class="add-to-cart-btn" onclick="addToCart(${index})">Añadir al Carrito</button>
                <!-- Indicador de selección -->
                <div class="selection-indicator" style="display: none;">✓</div>
            </div>
        `;
        modelsContainer.appendChild(modelDiv);
    });

    // Resetear selección
    selectedModels = [];
    updateSelectionSummary();
    modal.style.display = 'block';
}

function addToCart(modelIndex) {
    const product = products[currentProduct];
    const model = product.models[modelIndex];
    const modelDiv = document.querySelectorAll('.model-item')[modelIndex];

    if (model.colors && !modelDiv.querySelector('.color-select').value) {
        alert('Por favor, selecciona un color antes de agregar el modelo.');
        return;
    }

    if (model.sizes && !modelDiv.querySelector('.size-select').value) {
        alert('Por favor, selecciona una talla antes de agregar el modelo.');
        return;
    }

    const existingIndex = selectedModels.findIndex(item =>
        item.productType === currentProduct &&
        item.modelIndex === modelIndex &&
        item.color === (model.colors ? modelDiv.querySelector('.color-select').value : null)
    );

    if (existingIndex > -1) {
        selectedModels[existingIndex].quantity += 1;
        const selectionIndicator = modelDiv.querySelector('.selection-indicator');
        selectionIndicator.style.display = 'block';
    } else {
        selectedModels.push({
            productType: currentProduct,
            modelIndex: modelIndex,
            name: model.name,
            price: model.price,
            description: model.description,
            quantity: 1,
            color: model.colors ? modelDiv.querySelector('.color-select').value : null,
            size: model.sizes ? modelDiv.querySelector('.size-select').value : null
        });
        const selectionIndicator = modelDiv.querySelector('.selection-indicator');
        selectionIndicator.style.display = 'block';
    }

    updateSelectionSummary();
}

function updateSelectionSummary() {
    const summaryDiv = document.getElementById('selectionSummary');
    const selectedItemsDiv = document.getElementById('selectedItems');
    const totalPriceSpan = document.getElementById('totalPrice');
    const confirmBtn = document.getElementById('confirmBtn');

    if (selectedModels.length === 0) {
        summaryDiv.classList.remove('show');
        confirmBtn.disabled = true;
        return;
    }

    summaryDiv.classList.add('show');
    confirmBtn.disabled = false;
    selectedItemsDiv.innerHTML = '';
    let total = 0;

    selectedModels.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'selected-item';
        itemDiv.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>Cantidad: ${item.quantity} - S/ ${item.price} c/u</small><br>
                ${item.color ? `<small>Color: ${item.color}</small><br>` : ''}
                ${item.size ? `<small>Talla: ${item.size}</small><br>` : ''}
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <button class="quantity-btn" onclick="changeItemQuantity(${index}, -1)">-</button>
                <span style="font-weight: bold;">${item.quantity}</span>
                <button class="quantity-btn" onclick="changeItemQuantity(${index}, 1)">+</button>
                <button class="remove-btn" onclick="removeItem(${index})">×</button>
            </div>
        `;
        selectedItemsDiv.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    totalPriceSpan.textContent = total.toFixed(2);
}

function changeItemQuantity(itemIndex, change) {
    const item = selectedModels[itemIndex];
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
        item.quantity = newQuantity;
        updateSelectionSummary();
    }
}

function removeItem(itemIndex) {
    selectedModels.splice(itemIndex, 1);
    updateSelectionSummary();
}

function confirmPurchase() {
    if (selectedModels.length === 0) return;
    let message = `¡Hola! Me interesa comprar los siguientes productos:\n\n`;
    let total = 0;
    selectedModels.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `${index + 1}. ${item.name}\n`;
        message += `   📦 Cantidad: ${item.quantity}\n`;
        message += `   💰 Precio unitario: S/ ${item.price}.00\n`;
        message += `   💵 Subtotal: S/ ${subtotal}.00\n`;
        if (item.color) message += `   🎨 Color: ${item.color}\n`;
        if (item.size) message += `   👔 Talla: ${item.size}\n`;
        message += `   📝 ${item.description}\n\n`;
    });
    message += `🛒 TOTAL GENERAL: S/ ${total.toFixed(2)}\n`;
    message += `¿Podrías darme más información sobre la disponibilidad y el proceso de compra?\n¡Gracias!`;

    const whatsappUrl = `https://wa.me/51955360417?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
}

function closeModal() {
    document.getElementById('modelsModal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modelsModal');
    if (event.target === modal) {
        closeModal();
    }
};
