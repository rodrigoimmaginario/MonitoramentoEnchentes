document.addEventListener('DOMContentLoaded', function() {
    const alertas = [
        { cidade: 'Vitória', nivel: 'Crítico', data: '07/10/2024' },
        { cidade: 'Vila Velha', nivel: 'Alerta', data: '07/10/2024' },
        { cidade: 'Cariacica', nivel: 'Normal', data: '07/10/2024' }
    ];

    const listaAlertas = document.getElementById('lista-alertas');

    alertas.forEach(alerta => {
        const li = document.createElement('li');
        li.textContent = `Cidade: ${alerta.cidade} - Nível: ${alerta.nivel} - Data: ${alerta.data}`;
        listaAlertas.appendChild(li);
    });
});
function initMap() {
    // Definindo a localização inicial do mapa (Vitória, ES)
    const localizacaoInicial = { lat: -20.3155, lng: -40.3128 }; // Coordenadas de Vitória, ES

    // Criando o mapa e centralizando em "localizacaoInicial"
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12, // Nível de zoom (quanto maior, mais próximo)
        center: localizacaoInicial // Centro do mapa
    });

    // Adicionando um marcador para indicar uma área afetada
    const marcador = new google.maps.Marker({
        position: localizacaoInicial,
        map: map,
        title: 'Vitória - Área com Alerta de Enchente'
    });
} 
const estiloMapa = [
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#6b9ec7" }]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#000000" }]
    }
    // Adicione outros estilos aqui
];

const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: localizacaoInicial,
    styles: estiloMapa // Aplicando o estilo
});
function initMap() {
    var centerPosition = { lat: -20.3155, lng: -40.3128 }; // Vitória, ES

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: centerPosition,
    });

    // Marcador de Exemplo
    var marker = new google.maps.Marker({
        position: centerPosition,
        map: map,
        title: "Área de Alagamento!"
    });
}
