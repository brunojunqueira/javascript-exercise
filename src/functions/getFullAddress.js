export default function getFullAddress(address){
    return `${address.street}, ${address.suite} - ${address.zipcode} ${address.city}`;
}