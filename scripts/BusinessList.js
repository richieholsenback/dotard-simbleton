import { useBusiness } from './BusinessProvider'
import { Business } from './Business'

export const BusinessList = () => {
    const contentElement = document.querySelector(".active-businesses")
    const business = useBusiness()

    let BusinessHTMLRepresentation = "";
    for (const business of businesses) {
        BusinessHTMLRepresentation += Business(business);
    }
    constentElement.innerHTML += `
    ${BusinessHTMLRepresentation}
    `
} 