const mqtt = require('mqtt');


const client = mqtt.connect('mqtt://broker.hivemq.com:1883');


client.on('connect', () => {
    console.log('Connected to MQTT broker');

    
    client.publish('chinchat/health', 'You are subscribed to ChinChat health!');

    client.publish('chinchat/global', 'Welcome to ChinChat Global Channel!');

    client.publish('chinchat/health/mental-health', 'Mental health is crucial!');
    client.publish('chinchat/sports/football', 'Football update: Match results!');
    
    client.end();
});