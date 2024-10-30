// Lista de produtos
// Lista completa de produtos
const productsList = [
    "W9008MC", "MLTD358S", "W2020XC", "W2021XC", "W2023XC", "W2022XC", "W9250MC",
    "W9251MC", "W9252MC", "W9253MC", "MLTD201LC", "MLTD203UC", "W1330X",
    "3392C001AA", "3382C001AA", "3391C001AA", "3393C001AA", "T49H400C",
    "T49H200C", "T49H300C", "T49H100C", "W9050MC", "TN419KC", "841849C",
    "841852C", "841851C", "841850C", "408284C", "TN360C", "BTD60BK",
    "BT5001C", "BT5001M", "BT5001Y", "W9060MC", "W9061MC", "CLTC506L",
    "CLTM506L", "W9063MC", "CLTM603L", "CLTY506L", "W9062MC", "407823C",
    "W9060MCC", "CLTK503LC", "CLTC506LC", "TN419CC", "CLTM506LC", "TN419MC",
    "CLTY506LC", "TN419YC", "418477C", "MLTD708LC", "CF258XCC", "W9061MCC",
    "W9063MCC", "W9062MCC", "841813C", "CF258XCHIP", "W2020XCC", "CLTK609S",
    "CLTK503L", "407324R", "T504K", "T504C", "T504M", "T504Y", "CLTK603L",
    "CLTC603L", "CLTK659S", "W9037MC", "CLTK506LC", "W9004MCC", "CLTC503LC",
    "CLTM503LC", "CLTY503LC", "841919C", "841918C", "841921C", "CLTC808SC",
    "CLTM808SC", "841920C", "CLTK808SC", "CLTY808SC", "W9008MCC", "TK3162C",
    "W1030XC", "W1330C", "TR12X120", "TR12X220", "TR12X320", "TR12X420",
    "841993C", "45536537BR", "W2021XCC", "W2022XCC", "W2023XCC", "MLTD304E",
    "W9190MC", "CLTK806S", "W9191MC", "CLTC806S", "W9193MC", "CLTM806S",
    "W9192MC", "CLTY806S", "CLTK808S", "CLTC808S", "CLTM808S", "PFI107B",
    "PFI107MBK", "PFI107C", "PFI107M", "PFI107Y", "58DBU00", "CLTK806SC",
    "CLTC806SC", "CLTM806SC", "CLTY806SC", "MLTD204LC", "TK3182C", "841280C",
    "TK8117KC", "TK8117CC", "TK8117MC", "TK8117YC", "CX421K", "CX421C",
    "CX421M", "CX421Y", "T664K", "T664C", "T664M", "418126C", "INATIVO",
    "W9017MC", "TN324KC", "728C", "728M", "728Y", "MLTD708L", "MLTK706S",
    "CLTC609S", "CLTM609S", "CLTY603L", "CLTY609S", "CLTY808S", "CF4103XCC",
    "PFI320BK", "PFI320MBK", "W1105AC", "711Y", "TK5197KC", "CF258XC",
    "W2150XC", "W2153XC", "W2151XC", "W2152XC", "CLTK506L", "CLTC503L",
    "CLTM503L", "CLTY503L", "728K", "418126", "GLTINTEPSONK", "3ED69A",
    "3ED67A", "3ED68A", "3ED70A", "T774K", "402809C", "PONTASPENS6", "F9J64A",
    "T49H400", "T49H200", "T49H300", "T49H100", "841727YC", "841725CC",
    "841726MC", "841724KC", "CLTK603LRA", "CLTC603LRA", "CLTM603LRA",
    "CLTY603LRA", "TN580C", "TN3472C", "TK5197CC", "TK5197MC", "TK5197YC",
    "842381", "842379", "842380", "842378", "10006995K", "C711YC", "950KC",
    "951XLMC", "951XLYC", "951XLCC", "106R03745C", "TN324CC", "TN324MC",
    "TN324YC", "TN321KC", "TN321CC", "TN321MC", "TN321YC", "MLTD205EC",
    "408161C", "841816C", "841815C", "841814C", "CF411XC", "W9210MC",
    "W9051MC", "W9052MC", "TN3662XL", "6110DC", "W9053MC", "45536522BR",
    "W9241MC", "W9242MC", "W9243MC", "C711MC", "C711KC", "C711CC", "MLTD307U",
    "W9065MC", "406683C", "7286KC", "7287CC", "7288YC", "7289MC", "676M8A",
    "676M6A", "676M7A", "498N8A", "45536523BR", "45536521BR", "PFI110MBK",
    "PFI710BK", "PFI710C", "PFI710M", "PFI710Y", "407316C", "788XXLCC",
    "788XXLKC", "788XXLMC", "788XXLYC", "CF281XC", "712C", "712M", "CF410XC",
    "712Y", "C3510C", "842091C", "842092C", "842093C", "842094C", "DR3302C",
    "842378C", "842379C", "842380C", "842381C", "CLTC609SC", "CLTK609SC",
    "CLTM609SC", "CLTY609SC", "712K", "W9150MC", "W9151MC", "W9152MC",
    "W9153MC", "828277", "T664Y", "56FBH00", "W9211MC", "W9213MC", "W9212MC",
    "CF226XC", "CE505AC", "CLTY409", "CLTM409", "CLTK409", "CLTC409",
    "W9050MCC", "W9051MCC", "W9052MCC", "W9053MCC", "CE505XC", "TN3382C",
    "711K", "711M", "A33K132", "CF283AC", "W1030XCC", "CZ133A", "CF400XC",
    "CF401XC", "CF402XC", "CF403XC", "W1105A"
];

// Elementos DOM
const elements = {
    ticketNumber: document.getElementById('ticketNumber'),
    currentDateTime: document.getElementById('currentDateTime'),
    cepInput: document.getElementById('cep'),
    cepLoader: document.getElementById('cepLoader'),
    cepError: document.getElementById('cepError'),
    productSearch: document.getElementById('productSearch'),
    productsList: document.getElementById('productsList'),
    selectedProducts: document.getElementById('selectedProducts'),
    selectedProductsList: document.getElementById('selectedProductsList'),
    submitButton: document.getElementById('submitButton'),
    observation: document.getElementById('observation')
};

// Array de produtos selecionados
let selectedProductsArray = [];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    elements.ticketNumber.textContent = `Ticket: TK${Math.floor(Math.random() * 100000)}`;
    elements.currentDateTime.textContent = new Date().toLocaleString();
});

// Busca CEP
async function fetchAddress(cep) {
    const numericCEP = cep.replace(/\D/g, '');
    
    if (numericCEP.length === 8) {
        elements.cepLoader.classList.remove('hidden');
        elements.cepError.classList.add('hidden');
        
        try {
            const response = await fetch(`https://viacep.com.br/ws/${numericCEP}/json/`);
            const data = await response.json();

            if (data.erro) {
                throw new Error('CEP não encontrado');
            }

            document.getElementById('street').value = data.logradouro || '';
            document.getElementById('neighborhood').value = data.bairro || '';
            document.getElementById('city').value = data.localidade || '';
            document.getElementById('state').value = data.uf || '';

        } catch (error) {
            elements.cepError.textContent = 'CEP não encontrado';
            elements.cepError.classList.remove('hidden');
        } finally {
            elements.cepLoader.classList.add('hidden');
        }
    }
}

// Event Listeners
elements.cepInput.addEventListener('input', (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
        fetchAddress(cep);
    }
});

// Busca de Produtos
elements.productSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toUpperCase();
    
    if (searchTerm) {
        const filtered = productsList.filter(product => 
            product.includes(searchTerm)
        );
        displayProducts(filtered);
    } else {
        elements.productsList.classList.add('hidden');
    }
});

// Exibir produtos filtrados
function displayProducts(products) {
    if (products.length === 0) {
        elements.productsList.innerHTML = '<div class="product-item">Nenhum produto encontrado</div>';
    } else {
        elements.productsList.innerHTML = products
            .map(product => `
                <div class="product-item" data-product="${product}">
                    ${product}
                </div>
            `)
            .join('');
    }
    
    elements.productsList.classList.remove('hidden');
}

// Adicionar produto selecionado
elements.productsList.addEventListener('click', (e) => {
    const productItem = e.target.closest('.product-item');
    if (productItem) {
        const product = productItem.dataset.product;
        addProduct(product);
        elements.productSearch.value = '';
        elements.productsList.classList.add('hidden');
    }
});

// Adicionar produto
function addProduct(product) {
    if (!selectedProductsArray.find(p => p.product === product)) {
        selectedProductsArray.push({ product, quantity: 1 });
        updateProductsList();
        elements.selectedProducts.classList.remove('hidden');
    }
}

// Atualizar lista de produtos
function updateProductsList() {
    elements.selectedProductsList.innerHTML = selectedProductsArray
        .map((item, index) => `
            <tr>
                <td>${item.product}</td>
                <td>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <input type="number" 
                               value="${item.quantity}" 
                               min="1" 
                               onchange="updateQuantity(${index}, this.value)"
                               style="width: 80px">
                        <button class="remove-button" onclick="removeProduct(${index})">Remover</button>
                    </div>
                </td>
            </tr>
        `)
        .join('');
}

// Atualizar quantidade
function updateQuantity(index, value) {
    selectedProductsArray[index].quantity = parseInt(value) || 1;
}

// Remover produto
function removeProduct(index) {
    selectedProductsArray.splice(index, 1);
    if (selectedProductsArray.length === 0) {
        elements.selectedProducts.classList.add('hidden');
    }
    updateProductsList();
}

// Gerar PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Cabeçalho
    const requisitionNumber = `REQ${Math.floor(Math.random() * 1000000)}`;
    doc.setFontSize(16);
    doc.text('REQUISIÇÃO DE PRODUTOS', 105, 20, { align: 'center' });
    
    // Informações da requisição
    doc.setFontSize(12);
    doc.text(`Número: ${requisitionNumber}`, 20, 40);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 20, 50);
    doc.text(`Hora: ${new Date().toLocaleTimeString()}`, 20, 60);
    
    // Informações do cliente
    doc.text('INFORMAÇÕES DO CLIENTE', 20, 80);
    doc.text(`Cliente: ${document.getElementById('clientName').value}`, 20, 90);
    doc.text(`CNPJ: ${document.getElementById('cnpj').value}`, 20, 100);
    doc.text(`Contato: ${document.getElementById('contactPerson').value}`, 20, 110);
    
    // Endereço
    doc.text('ENDEREÇO DE ENTREGA', 20, 130);
    doc.text(`${document.getElementById('street').value}, ${document.getElementById('number').value}`, 20, 140);
    doc.text(`${document.getElementById('neighborhood').value} - ${document.getElementById('city').value}/${document.getElementById('state').value}`, 20, 150);
    doc.text(`CEP: ${document.getElementById('cep').value}`, 20, 160);
    
    // Tabela de produtos
    const tableColumn = ["Código", "Quantidade"];
    const tableRows = selectedProductsArray.map(item => [
        item.product,
        item.quantity
    ]);

    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 180,
        theme: 'grid',
        styles: { fontSize: 12 }
    });
    
    // Observações
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.text('OBSERVAÇÕES:', 20, finalY);
    doc.text(elements.observation.value || 'Nenhuma observação.', 20, finalY + 10);
    
    // Assinaturas
    const signatureY = finalY + 50;
    doc.line(20, signatureY, 80, signatureY); // Linha para assinatura
    doc.line(120, signatureY, 180, signatureY); // Linha para assinatura
    doc.text('Solicitante', 35, signatureY + 10);
    doc.text('Aprovador', 135, signatureY + 10);
    
    // Abrir PDF em nova aba
    window.open(doc.output('bloburl'), '_blank');
}

// Event listener para o botão de gerar requisição
elements.submitButton.addEventListener('click', generatePDF);