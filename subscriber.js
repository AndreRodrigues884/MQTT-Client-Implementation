const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    console.log('Connected to MQTT broker');

    client.subscribe('chinchat/health', () => {
        console.log('Subscribed to chinchat/health');
    });

    client.subscribe('chinchat/global');
    client.subscribe('chinchat/health/nutrition-and-diet');
    client.subscribe('chinchat/health/mental-health');
    client.subscribe('chinchat/health/diseases');
    client.subscribe('chinchat/health/sleep');
    client.subscribe('chinchat/health/fitness');
    client.subscribe('chinchat/tech/mobile-phones');
    client.subscribe('chinchat/tech/electric-vehicles');
    client.subscribe('chinchat/tech/smart-home');
    client.subscribe('chinchat/tech/robots');
    client.subscribe('chinchat/tech/printing');
    client.subscribe('chinchat/sports/football');
    client.subscribe('chinchat/sports/tennis');
    client.subscribe('chinchat/sports/swimming');
    client.subscribe('chinchat/sports/basketball');
    client.subscribe('chinchat/sports/padel');
    client.subscribe('chinchat/culture/arts-and-expression');
    client.subscribe('chinchat/culture/cultural-heritage');
    client.subscribe('chinchat/culture/norms-and-values');
    client.subscribe('chinchat/culture/change-and-adaptation');
    client.subscribe('chinchat/culture/identity');
    client.subscribe('chinchat/enterprise/finances');
    client.subscribe('chinchat/enterprise/devops');
    client.subscribe('chinchat/enterprise/marketing');
    client.subscribe('chinchat/enterprise/design');
    client.subscribe('chinchat/enterprise/manager');
});

client.on('message', (topic, message) => {
    console.log(`[${topic}] ${message.toString()}`);
});