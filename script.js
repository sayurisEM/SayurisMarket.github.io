const products = {
    edredones: {
        title: 'Edredones',
        icon: '🛏️',
        models: [
            {
                name: 'Edredón Clásico Individual',
                price: 40,
                description: 'Suave y cómodo para una persona',
                images: {
                    Blanco: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                    Gris: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
                    Beige: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&brightness=1.2'
                },
                colors: ['Blanco', 'Gris', 'Beige']
            },
            {
                name: 'Edredón Clásico Matrimonial',
                price: 45,
                description: 'Perfecto para parejas',
                images: {
                    Azul: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
                    Verde: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&saturation=1.2',
                    Rosa: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop&brightness=1.2'
                },
                colors: ['Azul', 'Verde', 'Rosa']
            },
            // ... otros modelos
        ]
    },
    casacas: {
        title: 'Casacas',
        icon: '🧥',
        models: [
            {
                name: 'Casaca Básica',
                price: 30,
                description: 'Simple y funcional',
                images: {
                    Negro: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
                    Gris: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=400&h=300&fit=crop',
                    Azul: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&brightness=1.1'
                },
                colors: ['Negro', 'Gris', 'Azul']
            },
            {
                name: 'Casaca Deportiva',
                price: 40,
                description: 'Ideal para ejercicio y actividades',
                images: {
                    Rojo: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=400&h=300&fit=crop',
                    Verde: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&brightness=1.2',
                    Amarillo: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=400&h=300&fit=crop&saturation=1.2'
                },
                colors: ['Rojo', 'Verde', 'Amarillo']
            },
            // ... otros modelos
        ]
    },
    gorros: {
        title: 'Gorros',
        icon: '🧢',
        models: [
            {
                name: 'Gorro Básico',
                price: 10,
                description: 'Sencillo y económico',
                images: {
                    Negro: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=300&fit=crop',
                    Blanco: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
                    Gris: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=300&fit=crop&brightness=1.1'
                },
                colors: ['Negro', 'Blanco', 'Gris']
            },
            {
                name: 'Gorro de Lana',
                price: 15,
                description: 'Abrigador para el frío',
                images: {
                    Marrón: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
                    Beige: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=300&fit=crop&saturation=1.2',
                    Azul: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&brightness=1.2'
                },
                colors: ['Marrón', 'Beige', 'Azul']
            },
            // ... otros modelos
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
        modelDiv.onclick = () => toggleModelSelection(index);

        // Mostrar la imagen predeterminada (primer color)
        const defaultColor = model.colors[0];
        modelDiv.innerHTML = `
            <img class="model-image" src="${model.images[defaultColor]}" alt="${model.name}" onerror="this.innerHTML='Imagen no disponible'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center';">
            <div class="model-info">
                <div class="model-details">
                    <span class="model-name">${model.name}</span>
                    <span class="model-price">S/ ${model.price}</span>
                </div>
                <div style="color: #666; font-size: 0.9rem;">${model.description}</div> 
                <!-- Opción de color -->
                <div class="color-options">
                    <strong>Color:</strong>
                    <select class="color-select" data-model-index="${index}">
                        <option value="">Selecciona un color</option>
                        ${model.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                    </select>
                </div>
            </div>
        `;
        modelsContainer.appendChild(modelDiv);

        // Actualizar la imagen cuando se cambia el color
        const colorSelect = modelDiv.querySelector('.color-select');
        colorSelect.addEventListener('change', (event) => {
            const selectedColor = event.target.value;
            if (selectedColor) {
                const imageElement = modelDiv.querySelector('.model-image');
                imageElement.src = model.images[selectedColor];
            }
        });
    });

    // Reset selections
    selectedModels = [];
    updateSelectionSummary();
    modal.style.display = 'block';
}

function toggleModelSelection(modelIndex) {
    const product = products[currentProduct];
    const model = product.models[modelIndex];
    const modelDiv = document.querySelectorAll('.model-item')[modelIndex];
    const colorSelect = modelDiv.querySelector('.color-select');
    const selectedColor = colorSelect.value;

    if (!selectedColor) {
        alert('Por favor, selecciona un color antes de agregar el modelo.');
        return;
    }

    const existingIndex = selectedModels.findIndex(item =>
        item.productType === currentProduct && item.modelIndex === modelIndex
    );

    if (existingIndex > -1) {
        // Remove from selection
        selectedModels.splice(existingIndex, 1);
        modelDiv.classList.remove('selected');
        const countElement = modelDiv.querySelector('.selected-count');
        if (countElement) countElement.remove();
    } else {
        // Add to selection
        selectedModels.push({
            productType: currentProduct,
            modelIndex: modelIndex,
            name: model.name,
            price: model.price,
            description: model.description,
            quantity: 1,
            color: selectedColor // Nuevo campo para el color
        });
        modelDiv.classList.add('selected');
        const countElement = document.createElement('div');
        countElement.className = 'selected-count';
        countElement.textContent = '1';
        modelDiv.appendChild(countElement);
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
                <small>Color: ${item.color}</small>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div class="quantity-selector" style="margin: 0;">
                    <button class="quantity-btn" style="width: 30px; height: 30px; font-size: 1rem;" onclick="changeItemQuantity(${index}, -1)">-</button>
                    <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                    <button class="quantity-btn" style="width: 30px; height: 30px; font-size: 1rem;" onclick="changeItemQuantity(${index}, 1)">+</button>
                </div>
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
        // Update the count badge
        const modelDiv = document.querySelectorAll('.model-item')[item.modelIndex];
        const countElement = modelDiv.querySelector('.selected-count');
        if (countElement) {
            countElement.textContent = newQuantity;
        }
        updateSelectionSummary();
    }
}

function removeItem(itemIndex) {
    const item = selectedModels[itemIndex];
    // Remove visual selection
    const modelDiv = document.querySelectorAll('.model-item')[item.modelIndex];
    modelDiv.classList.remove('selected');
    const countElement = modelDiv.querySelector('.selected-count');
    if (countElement) countElement.remove();
    // Remove from array
    selectedModels.splice(itemIndex, 1);
    updateSelectionSummary();
}

function confirmPurchase() {
    if (selectedModels.length === 0) return;
    let message = `¡Hola! Me interesa comprar los siguientes productos:
`;
    let total = 0;
    selectedModels.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `${index + 1}. ${item.name}
`;
        message += `   📦 Cantidad: ${item.quantity}
`;
        message += `   💰 Precio unitario: S/ ${item.price}.00
`;
        message += `   💵 Subtotal: S/ ${subtotal}.00
`;
        message += `   🎨 Color: ${item.color}
`;
        message += `   📝 ${item.description}
`;
    });
    message += `🛒 TOTAL GENERAL: S/ ${total.toFixed(2)}
`;
    message += `¿Podrías darme más información sobre la disponibilidad y el proceso de compra?
¡Gracias!`;
    const whatsappUrl = `https://wa.me/51955360417?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
}

function closeModal() {
    document.getElementById('modelsModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modelsModal');
    if (event.target === modal) {
        closeModal();
    }
};
