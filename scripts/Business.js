export const Business = (businessObj) => {
    return `   
        <h1>Active Businesses</h1>
                <div class="business-card">
                    <div class="card-header">
                        <h2>${businessObj.companyName}</h2>
                    </div>
                    <div class="business-address">
                        <p>${businessObj.addressFullStreet}</p>
                        <p>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
                    </div>
                </div>
    `
}