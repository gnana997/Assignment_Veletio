// You are a delivery person and your task is to deliver packages to different cities. 
// You deliver packages in different trips. You take a flight to a city(c1) and then deliver packages 
// to all the cities connected by road. You then take another flight to deliver packages to the next 
// set of cities and so on until all the packages are delivered.Given a set of roads: 
// [(c1, c2), (c4, c5), (c3, c6).....] and a set of deliveries: [c1, c6, c8, c11…] where c1 means a 
// delivery in c1 and the order of the deliveries don't matter. All the cities may not be connected 
// together so you may have to take multiple flights/trips. Your task to find the minimum number of trips/flights 
// required to complete a given set of deliveries


function delivery(roads, deliveries){
    let queue = [];
    let roadConnections = {};
    roads.map((road) => {
        if(roadConnections[road[0].toString()]){
            roadConnections[road[0].toString()].push(road[1]);
        }else{
            roadConnections[road[0].toString()] = [road[1]];
        }
    });
    let noOfTrips = 0;
    let processed = {};
    Object.keys(roadConnections).map(city => {
        processed[city] = false;
    })
    Object.keys(roadConnections).map((city) => {
        if(!processed[city]){
            queue.push(city)
            while(queue.length > 0){
                let cityName = queue.shift();
                processed[cityName] = true;
                let index = deliveries.indexOf(cityName);
                if(index !== -1) {
                    deliveries[index] = "X"
                }
                if(roadConnections[cityName]){
                    queue.push(...roadConnections[cityName]);
                }
            }
            noOfTrips+=1
        }
    });
    return noOfTrips;
}

let roadConnection = [["c1", "c2"], ["c4", "c5"], ["c3", "c6"], ["c2", "c3"]];
let deliveryDetails = ["c1", "c2", "c3", "c5", "c4", "c6"];

console.log(delivery(roadConnection,deliveryDetails));
// 2