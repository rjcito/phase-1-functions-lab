function distanceFromHqInBlocks(pickUpLocation){
    let blocks;
    if (pickUpLocation > 42){
        return blocks = (pickUpLocation - 42);
    }else (pickUpLocation < 42); {
        return blocks = (42 - pickUpLocation);
    }
}

function distanceFromHqInFeet(blocks){
    let inFeet;
    return inFeet = distanceFromHqInBlocks(blocks)*264;
}

function distanceTravelledInFeet(start, destination){
    let distanceTrvld;
    if (start > destination){
       return distanceTrvld = (start - destination) * 264;
    }else (start < destination);{
        return distanceTrvld = (destination - start)*264;
    } 

}

function calculatesFarePrice(start, destination){
    let price;  
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return price = 0;
    }else if (distance > 400 && distance < 2000){
        return price = (distance -400)*.02;
    }else if (distance > 2000 && distance < 2500){
        return price = 25;
    }else (distance > 2500);{
        return "cannot travel that far";
    }

}